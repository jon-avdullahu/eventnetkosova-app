"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const handleDirectCredentials = async () => {
    try {
      setLoading(true);
      setError("");
      
      // Make a direct API call to debug
      const response = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          callbackUrl: window.location.origin,
          json: true
        }),
      });
      
      setDebugInfo({
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries([...response.headers]),
        url: response.url
      });
      
      try {
        const data = await response.json();
        setDebugInfo(prev => ({ ...prev, data }));
      } catch (e) {
        setDebugInfo(prev => ({ ...prev, responseError: String(e) }));
      }
      
    } catch (error) {
      console.error("Direct API error:", error);
      setError("API connection error: " + String(error));
      setDebugInfo({ directApiError: String(error) });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      
      // Log attempt
      console.log("Login attempt with:", email);
      
      // Create debug info
      const debugData: any = {
        timestamp: new Date().toISOString(),
        email,
        attemptTime: Date.now()
      };
      
      // Perform login with callbackUrl set to current origin
      const absoluteCallbackUrl = window.location.origin;
      debugData.callbackUrl = absoluteCallbackUrl;
      
      // Perform login
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: absoluteCallbackUrl
      });
      
      // Update debug info
      debugData.result = result;
      debugData.responseTime = Date.now();
      setDebugInfo(debugData);
      
      console.log("Login response:", result);
      
      if (result?.error) {
        setError(result.error || "Login failed");
      } else if (result?.ok) {
        setError("");
        // Show success message
        setDebugInfo(prev => ({ ...prev, status: "success", message: "Login successful! Redirecting..." }));
        // Manually redirect
        window.location.href = result.url || absoluteCallbackUrl;
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
      setDebugInfo({ error: String(error) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary">EventNet Kosova</h1>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">Sign in to your account</h2>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-gray-400"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            
            <button
              type="button"
              onClick={handleDirectCredentials}
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-gray-200"
            >
              Debug API Call
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <span>Don't have an account? </span>
              <Link href="/register" className="font-medium text-primary hover:text-primary-dark">
                Sign up
              </Link>
            </div>
          </div>
        </form>
        
        {debugInfo && (
          <div className="mt-6 text-xs bg-gray-100 p-4 rounded overflow-auto max-h-60">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Debug Information</span>
              <button 
                onClick={() => navigator.clipboard.writeText(JSON.stringify(debugInfo, null, 2))}
                className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                Copy
              </button>
            </div>
            <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
} 