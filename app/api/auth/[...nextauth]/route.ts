import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth?type_auth=login',
  },
  session: {
    strategy: 'jwt',
  },
  // jwt: {
  //   maxAge: 60 * 60 * 24 * 30,
  // },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials: any, req): Promise<any | null> {
        // let user: ResponseData = { refresh: '', access: '' };
        console.log(credentials.email);
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
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   console.log(`Base url:${baseUrl} URL: ${url}`);

    //   // if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   // // Allows callback URLs on the same origin
    //   // else if (new URL(url).origin === baseUrl) return url;
    //   // return baseUrl;
    //   return url;
    // },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


