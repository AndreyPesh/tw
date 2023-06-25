import { COOKIES } from '@/src/5_shared/types/constant';
import NextAuth, { AuthOptions } from 'next-auth';
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
  // jwt: {
  //   maxAge: 60 * 60 * 24 * 30,
  // },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any, req): Promise<any | null> {
        // let user: ResponseData = { refresh: '', access: '' };
        // console.log(credentials.email);
        console.log('call authorize');

        // return null;
        try {
          // const response = await axios.post<ResponseData>(
          //   'http://localhost:4200/api/auth/login',
          //   credentials
          // );
          // if (response.status === 200) {
          //   user = response.data;
          //   return user;
          // }
          return {
            name: 'User is logged',
            password: '12434',
          };
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(user);
    //   return true;
    // },
    // async signIn(user, account, profile) {
    //   return true
    // },
    async session(session: any) {
      return session;
    },
    async jwt(token: any) {
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
