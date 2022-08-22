import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_API_KEY,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }),
  ],
  secret: process.env.JWT_SECRET,
  jwt: {
    encryption: true,
  },
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/profile') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/');
    },
  },
});