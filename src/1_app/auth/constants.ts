import { CookiesOptions } from 'next-auth';

export const COOKIES: Partial<CookiesOptions> = {
  sessionToken: {
    name: `next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
  callbackUrl: {
    name: `next-auth.callback-url`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
  csrfToken: {
    name: 'next-auth.csrf-token',
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
};
