import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { handler } from '@/lib/auth';

export { handler as GET, handler as POST };
