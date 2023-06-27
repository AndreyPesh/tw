import prisma from '@/global.d';
import { AuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import bcryptjs from 'bcryptjs';
import { User } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { COOKIES } from '@/src/5_shared/types/constant';
import { validateLoginData } from '@/src/5_shared/utils/server/validate/validateFormData';

export const authOptions: AuthOptions = {
  cookies: COOKIES,
  pages: {
    signIn: '/auth?type_auth=login',
    error: '/auth?type_auth=login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: { email: { type: 'text' }, password: { type: 'password' } },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return Promise.reject(new Error('Fill in the fields!'));
        }
        const data = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
          const listErrors = await validateLoginData(data);
          if (listErrors.length !== 0) {
            return Promise.reject(new Error(listErrors.pop()));
          }

          const user = await prisma.user.findUnique({
            where: { email: data.email },
          });

          if (!user) {
            return Promise.reject(new Error('User does not exist!'));
          }
          if (user.password) {
            const isValidPassword = await bcryptjs.compare(
              data.password,
              user.password
            );
            if (isValidPassword) {
              return user;
            } else {
              return Promise.reject(new Error('Invalid password!'));
            }
          }
          return Promise.reject(new Error('Something went wrong!'));
        } catch {
          return Promise.reject(new Error('Something went wrong!'));
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    // signIn({ user }) {
    //   return true;
    // },
    // session({ session, token }) {
    //   // session?.user?.id = token.id;
    //   // session.user.username = token.username;
    //   return session;
    // },
    // jwt({ token, account, user }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //     token.id = user.id;
    //     // token.username = (user as User).username;
    //     // console.log({ user });
    //   }
    //   return token;
    // },
  },
};
