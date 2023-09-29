import { authOptions } from '@/src/1_app/auth/auth';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
