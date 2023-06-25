import NextAuth, { AuthOptions, CookiesOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const cookies: Partial<CookiesOptions> = {
  sessionToken: {
    name: `next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      // domain: process.env.NEXT_PUBLIC_DOMAIN,​
      secure: true,
    },
  },
  callbackUrl: {
    name: `next-auth.callback-url`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      // domain: process.env.NEXT_PUBLIC_DOMAIN,​
      secure: true,
    },
  },
  csrfToken: {
    name: 'next-auth.csrf-token',
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      // domain: process.env.NEXT_PUBLIC_DOMAIN,​
      secure: true,
    },
  },
};

export const authOptions: AuthOptions = {
  cookies: cookies,
  pages: {
    signIn: '/auth?type_auth=login',
    signOut: '/auth?type_auth=login',
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
      credentials: {
        username: {},
        password: {},
      },
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
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   console.log(`Base url:${baseUrl} URL: ${url}`);

    //   // if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   // // Allows callback URLs on the same origin
    //   // else if (new URL(url).origin === baseUrl) return url;
    //   // return baseUrl;
    //   return url;
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
