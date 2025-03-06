"use server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "advocate@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Please provide both email and password");
          }

          const validEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
          const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

          if (!validEmail || !validPassword) {
            throw new Error("Server configuration error");
          }

          if (
            credentials.email === validEmail &&
            credentials.password === validPassword
          ) {
            return {
              id: "1",
              name: "Advocate Admin",
              email: credentials.email,
            };
          }

          throw new Error("Invalid email or password");
        } catch (error) {
          console.error("Authentication error:", error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/dashboard",
    // error: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
