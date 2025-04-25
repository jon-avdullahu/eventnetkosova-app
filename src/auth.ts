import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "./lib/mongodb";
import User from "./models/User";
import type { NextAuthOptions, DefaultSession } from "next-auth";

// Extend the session type to include user ID
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

// Force NodeJS runtime to prevent edge runtime issues
export const runtime = "nodejs";

// Define user type
interface UserType {
  id: string;
  name: string;
  email: string;
  image?: string;
}

// Define NextAuth configuration
export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("[NextAuth] Auth attempt for:", credentials?.email);
          
          if (!credentials?.email || !credentials?.password) {
            console.error("[NextAuth] Missing credentials");
            return null;
          }
          
          await connectDB();
          console.log("[NextAuth] DB connection established");
          
          // Use as any to avoid type issues
          const userModel = User as any;
          const user = await userModel.findOne({ email: credentials.email });
          
          if (!user) {
            console.error("[NextAuth] User not found:", credentials.email);
            return null;
          }
          
          console.log("[NextAuth] User found, checking password");
          const isPasswordMatch = await compare(
            credentials.password,
            user.password
          );
          
          if (!isPasswordMatch) {
            console.error("[NextAuth] Password doesn't match for:", credentials.email);
            return null;
          }
          
          console.log("[NextAuth] Auth successful for:", credentials.email);
          
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error("[NextAuth] Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("[NextAuth] JWT callback - Adding user data to token");
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        console.log("[NextAuth] Session callback - Adding user ID to session");
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  logger: {
    error(code, metadata) {
      console.error("[NextAuth][error]", { code, metadata });
    },
    warn(code) {
      console.warn("[NextAuth][warn]", code);
    },
    debug(code, metadata) {
      console.log("[NextAuth][debug]", { code, metadata });
    },
  },
};

// Auth function to be used in middleware or server components
export const { auth } = NextAuth(authConfig); 