import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "./lib/mongodb";
import User from "./models/User";

// Set runtime to nodejs to prevent edge runtime issues
export const runtime = "nodejs";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        await connectDB();
        
        const user = await User.findOne({ email: credentials.email });
        
        if (!user) {
          return null;
        }
        
        const isPasswordMatch = await compare(
          credentials.password,
          user.password
        );
        
        if (!isPasswordMatch) {
          return null;
        }
        
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST, handler as auth }; 