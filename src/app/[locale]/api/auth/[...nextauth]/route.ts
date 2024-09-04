import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {checkAndSaveUser} from "@/app/[locale]/servers/user";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      httpOptions: {
        timeout: 100000,
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await checkAndSaveUser(user.name, user.email, user.image);
      return true
    },
    async redirect({url, baseUrl}){
      // Always use the provided URL for redirection
      return url
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
