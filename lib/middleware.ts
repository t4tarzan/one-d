import { NextRequest, NextResponse } from 'next/server';
import { logger } from './logger';

export interface RequestContext {
  requestId: string;
  startTime: number;
  method: string;
  path: string;
}

// Generate unique request ID
export function generateRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Request logging middleware
export function withRequestLogging(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const startTime = Date.now();
    const requestId = generateRequestId();
    const method = request.method;
    const path = new URL(request.url).pathname;

    // Log incoming request
    logger.apiRequest(method, path, {
      requestId,
      headers: Object.fromEntries(request.headers.entries()),
    });

    try {
      const response = await handler(request);
      const duration = Date.now() - startTime;

      // Log response
      logger.apiResponse(method, path, response.status, duration);

      // Add request ID to response headers
      response.headers.set('X-Request-ID', requestId);
      response.headers.set('X-Response-Time', `${duration}ms`);

      return response;
    } catch (error) {
      const duration = Date.now() - startTime;
      logger.apiError(method, path, error);
      throw error;
    }
  };
}

// CORS middleware
export function withCORS(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS || '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Request-ID',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const response = await handler(request);

    // Add CORS headers to response
    response.headers.set('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGINS || '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Request-ID');

    return response;
  };
}

// Rate limiting middleware (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  options: { maxRequests: number; windowMs: number } = { maxRequests: 100, windowMs: 60000 }
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const now = Date.now();
    const rateLimitData = rateLimitMap.get(ip);

    if (rateLimitData) {
      if (now < rateLimitData.resetTime) {
        if (rateLimitData.count >= options.maxRequests) {
          return NextResponse.json(
            {
              error: 'Too Many Requests',
              message: 'Rate limit exceeded. Please try again later.',
              retryAfter: Math.ceil((rateLimitData.resetTime - now) / 1000),
            },
            { 
              status: 429,
              headers: {
                'X-RateLimit-Limit': options.maxRequests.toString(),
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Reset': new Date(rateLimitData.resetTime).toISOString(),
                'Retry-After': Math.ceil((rateLimitData.resetTime - now) / 1000).toString(),
              },
            }
          );
        }
        rateLimitData.count++;
      } else {
        // Reset window
        rateLimitMap.set(ip, { count: 1, resetTime: now + options.windowMs });
      }
    } else {
      // First request from this IP
      rateLimitMap.set(ip, { count: 1, resetTime: now + options.windowMs });
    }

    const currentData = rateLimitMap.get(ip)!;
    const response = await handler(request);

    // Add rate limit headers
    response.headers.set('X-RateLimit-Limit', options.maxRequests.toString());
    response.headers.set('X-RateLimit-Remaining', (options.maxRequests - currentData.count).toString());
    response.headers.set('X-RateLimit-Reset', new Date(currentData.resetTime).toISOString());

    return response;
  };
}

// Combine multiple middleware
export function withMiddleware(
  handler: (request: NextRequest) => Promise<NextResponse>,
  ...middlewares: Array<(handler: (request: NextRequest) => Promise<NextResponse>) => (request: NextRequest) => Promise<NextResponse>>
) {
  return middlewares.reduceRight(
    (acc, middleware) => middleware(acc),
    handler
  );
}

// Request validation middleware
export function withValidation<T>(
  handler: (request: NextRequest, data: T) => Promise<NextResponse>,
  validator: (data: unknown) => T
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      const body = await request.json();
      const validatedData = validator(body);
      return await handler(request, validatedData);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json(
          { error: 'Validation Error', message: error.message },
          { status: 400 }
        );
      }
      throw error;
    }
  };
}
