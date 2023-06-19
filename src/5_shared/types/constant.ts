import { EnumLinkPage, EnumTypeAuth } from './enum';

export const TYPE_AUTH_PARAM = 'type_auth';

export const URL_LOGIN_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.LOGIN}`;
export const URL_SIGNUP_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.SIGNUP}`;
