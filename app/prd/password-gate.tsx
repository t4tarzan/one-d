'use client';

import { useState, useEffect } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const CORRECT_PASSWORD = '2345';
  const STORAGE_KEY = 'prd_unlocked';

  useEffect(() => {
    // Check if already unlocked in session
    const unlocked = sessionStorage.getItem(STORAGE_KEY);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setError('');
    } else {
      setError('Invalid code. Please try again.');
      setPassword('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPassword(value);
    setError('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Lock Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-full mb-4 backdrop-blur-sm border border-purple-500/30">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">AI Secure Network</h1>
            <p className="text-purple-300">Protected Document Access</p>
          </div>

          {/* Password Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-2">
                  Enter 4-Digit Access Code
                </label>
                <input
                  id="password"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="••••"
                  className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-purple-300/50"
                  autoComplete="off"
                  autoFocus
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-200 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={password.length !== 4}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
              >
                {password.length === 4 ? 'Unlock Document' : 'Enter Code'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-xs text-purple-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secured by AI Secure Network</span>
              </div>
            </div>
          </div>

          {/* Info Text */}
          <div className="mt-6 text-center text-purple-300/70 text-sm">
            <p>This document contains confidential product information.</p>
            <p className="mt-1">Access is restricted to authorized personnel only.</p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
