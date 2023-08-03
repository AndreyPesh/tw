import { CookiesOptions } from 'next-auth';
import { EnumLinkPage, EnumTypeAuth } from './enum';

export const DEFAULT_NAME_AVATAR = './avatar.svg';

export const TYPE_AUTH_PARAM = 'type_auth';

export const URL_LOGIN_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.LOGIN}`;
export const URL_SIGNUP_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.SIGNUP}`;

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
