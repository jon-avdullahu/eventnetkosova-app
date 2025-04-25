import NextAuth from "next-auth";
import { authConfig } from "@/auth";

// Create a handler that works with App Router
const handler = NextAuth(authConfig);

// Export the handler's GET and POST functions
export { handler as GET, handler as POST };

// Force NodeJS runtime
export const runtime = "nodejs"; 