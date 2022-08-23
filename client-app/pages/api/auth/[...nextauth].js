import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github'

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
    GithubProvider({
      clientId: process.env.GITHUB_API_KEY,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ]
});