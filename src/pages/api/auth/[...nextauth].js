// [...nextauth].js

import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure o provedor Google
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // ... outras opções de configuração do NextAuth.js
})
