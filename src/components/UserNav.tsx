"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function UserNav() {
  const { data: session, status } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await signOut({ redirect: true, callbackUrl: "/" });
  };
  
  if (status === "loading") {
    return (
      <div className="flex items-center space-x-4">
        <div className="h-8 w-20 animate-pulse rounded-md bg-gray-200"></div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center space-x-4">
      {session?.user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm md:text-base font-medium text-primary-500">
            Welcome, <span className="font-bold">{session.user.name}</span>
          </span>
          <button
            onClick={handleSignOut}
            disabled={isLoggingOut}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 disabled:opacity-70"
          >
            {isLoggingOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-800 hover:text-primary"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
} 