type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  context?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatLog(entry: LogEntry): string {
    const { timestamp, level, message, context, data } = entry;
    const contextStr = context ? `[${context}]` : '';
    const dataStr = data ? `\n${JSON.stringify(data, null, 2)}` : '';
    return `${timestamp} ${level.toUpperCase()} ${contextStr} ${message}${dataStr}`;
  }

  private log(level: LogLevel, message: string, data?: unknown, context?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      context,
    };

    const formattedLog = this.formatLog(entry);

    switch (level) {
      case 'debug':
        if (this.isDevelopment) console.debug(formattedLog);
        break;
      case 'info':
        console.info(formattedLog);
        break;
      case 'warn':
        console.warn(formattedLog);
        break;
      case 'error':
        console.error(formattedLog);
        break;
    }
  }

  debug(message: string, data?: unknown, context?: string) {
    this.log('debug', message, data, context);
  }

  info(message: string, data?: unknown, context?: string) {
    this.log('info', message, data, context);
  }

  warn(message: string, data?: unknown, context?: string) {
    this.log('warn', message, data, context);
  }

  error(message: string, error?: unknown, context?: string) {
    if (error instanceof Error) {
      this.log('error', message, {
        message: error.message,
        stack: error.stack,
        name: error.name,
      }, context);
    } else {
      this.log('error', message, error, context);
    }
  }

  // API request logging
  apiRequest(method: string, path: string, data?: unknown) {
    this.info(`${method} ${path}`, data, 'API');
  }

  apiResponse(method: string, path: string, statusCode: number, duration: number) {
    this.info(`${method} ${path} - ${statusCode} (${duration}ms)`, undefined, 'API');
  }

  apiError(method: string, path: string, error: unknown) {
    this.error(`${method} ${path} failed`, error, 'API');
  }

  // Database logging
  dbQuery(operation: string, model: string, duration?: number) {
    const message = duration 
      ? `${operation} ${model} (${duration}ms)`
      : `${operation} ${model}`;
    this.debug(message, undefined, 'DB');
  }

  dbError(operation: string, model: string, error: unknown) {
    this.error(`${operation} ${model} failed`, error, 'DB');
  }
}

export const logger = new Logger();
