"use client";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status, router]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-32 max-w-5xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome, {session?.user?.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">Email: {session?.user?.email}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Your Events</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You don't have any events yet. Start by creating your first event!
            </p>
            <button className="mt-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Create Event
            </button>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Account Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Events:</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span>Active Devices:</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span>Usage:</span>
                <span className="font-medium">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 