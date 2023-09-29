import { authOptions } from '@/src/6_shared/utils/server/auth';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
