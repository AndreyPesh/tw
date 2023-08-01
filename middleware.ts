// export { default } from 'next-auth/middleware';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  // function middleware(req) {
  //   console.log(req.nextauth.token);
  // },
  {
    secret: process.env.NEXTAUTH_SECRET as string,
  }
);

export const config = { matcher: ['/user'] };

// import { getServerSession } from 'next-auth';
// import { NextRequest, NextResponse } from 'next/server';
// import { authOptions } from './src/5_shared/utils/server/auth';

// export { default } from 'next-auth/middleware';

// export async function middleware(request: NextRequest) {
//   // const session = await getServerSession(authOptions);
//   // if (session === null) {
//   //   return NextResponse.rewrite(new URL('/auth', request.url));
//   // }
//   return NextResponse.next();
// }

// export const config = { matcher: ['/user'] };
// // export const config = { matcher: [] };
