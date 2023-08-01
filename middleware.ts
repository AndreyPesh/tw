import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
  console.log(`middleware ${request.nextUrl}`);
  return NextResponse.next();
  
}

export const config = { matcher: ['/user'] };
// export const config = { matcher: [] };
