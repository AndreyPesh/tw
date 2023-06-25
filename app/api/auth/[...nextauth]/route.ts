import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface LoginData {
  email: string;
  password: string;
}

interface ResponseData {
  refresh: string;
  access: string;
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth',
  },
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {},
      async authorize(credentials: any, req): Promise<any | null> {
        let user: ResponseData = { refresh: '', access: '' };
        console.log(credentials);
        return null;
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

  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
