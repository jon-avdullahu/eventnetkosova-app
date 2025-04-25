"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    
    try {
      setLoading(true);
      setError("");
      
      // Log attempt
      console.log("Registration attempt with:", email);
      
      // Create debug info
      const debugData: any = {
        timestamp: new Date().toISOString(),
        email,
        name,
        attemptTime: Date.now(),
        url: "/api/auth/register"
      };
      
      // Perform registration
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      // Update debug info with response details
      debugData.status = response.status;
      debugData.statusText = response.statusText;
      debugData.headers = Object.fromEntries([...response.headers]);
      
      // Get response data
      let data;
      try {
        data = await response.json();
        debugData.response = data;
      } catch (jsonError) {
        debugData.jsonError = String(jsonError);
        debugData.responseText = await response.text();
      }
      
      debugData.responseTime = Date.now();
      setDebugInfo(debugData);
      
      console.log("Registration response:", response.status, data);
      
      if (!response.ok) {
        setError(data?.message || `Registration failed with status: ${response.status}`);
      } else {
        setSuccess(true);
        setError("");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(`Network error: ${String(error)}`);
      setDebugInfo({ error: String(error), type: "network" });
    } finally {
      setLoading(false);
    }
  };

  // Test the direct connection to MongoDB
  const testConnection = async () => {
    try {
      setLoading(true);
      
      const response = await fetch("/api/auth/debug", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const testData = {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries([...response.headers]),
      };
      
      try {
        const data = await response.json();
        setDebugInfo({
          ...testData,
          data,
          timestamp: new Date().toISOString()
        });
      } catch (jsonError) {
        setDebugInfo({
          ...testData,
          jsonError: String(jsonError),
          responseText: await response.text(),
          timestamp: new Date().toISOString()
        });
      }
      
    } catch (error) {
      console.error("Connection test error:", error);
      setDebugInfo({
        error: String(error),
        type: "testConnection",
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary">EventNet Kosova</h1>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">Create your account</h2>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="text-green-700">Registration successful!</p>
            <Link 
              href="/login" 
              className="block mt-2 text-center text-sm font-medium text-green-600 hover:text-green-700"
            >
              Click here to sign in
            </Link>
          </div>
        )}
        
        {!success && (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
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
                  autoComplete="new-password"
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
                {loading ? "Creating account..." : "Sign up"}
              </button>
              
              <button
                type="button"
                onClick={testConnection}
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-gray-200"
              >
                Test Connection
              </button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <span>Already have an account? </span>
                <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        )}
        
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