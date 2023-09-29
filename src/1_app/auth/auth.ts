import prisma from '@/global.d';
import { AuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import bcryptjs from 'bcryptjs';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

import { validateLoginData } from '@/src/6_shared/utils/server/validate/validateFormData';
import { UserData } from '../../6_shared/utils/server/fetching/user/data';
import { COOKIES } from './constants';

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
      async authorize(credentials): Promise<UserData | null> {
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
            include: {
              cart: true,
            },
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
              const { password, ...userData } = user;
              return userData;
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
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = { ...session.user, ...token };
      return session;
    },
  },
};
