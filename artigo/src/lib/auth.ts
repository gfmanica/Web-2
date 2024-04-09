import nextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const handler = nextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: '/auth',
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});
