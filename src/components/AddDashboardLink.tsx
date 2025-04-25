"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AddDashboardLink() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <Link 
      href="/dashboard" 
      className="text-sm font-medium bg-primary-500/10 text-primary-500 px-3 py-1 rounded-md hover:bg-primary-500/20"
    >
      Dashboard
    </Link>
  );
} 