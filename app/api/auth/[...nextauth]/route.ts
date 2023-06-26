import prisma from '@/global.d';
import { COOKIES } from '@/src/5_shared/types/constant';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  cookies: COOKIES,
  pages: {
    signIn: '/auth?type_auth=login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any, req): Promise<any | null> {
        // const { username, password } = loginUserSchema.parse(credentials);
        // const user = await prisma.user.findUnique({
        //   where: { username },
        // });
        // if (!user) return null;
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) return null;
        // return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    session({ session, token }) {
      // session?.user?.id = token.id;
      // session.user.username = token.username;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        // token.username = (user as User).username;
        console.log({ user });
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
