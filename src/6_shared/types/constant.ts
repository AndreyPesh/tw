import { EnumTypeAuth } from './enum';
import { EnumLinkPage } from '../constants/main_navigation/enums';

export const DEFAULT_NAME_AVATAR = '/avatar.svg';
export const DEFAULT_USER_NAME = `user_${Date.now()}`;
export const ADD_FILE_TEMPLATE = './add-icon.svg';

export const TYPE_AUTH_PARAM = 'type_auth';

export const FIRST_PAGE_NUMBER = 1;
export const PER_PAGE = 4;

export const URL_LOGIN_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.LOGIN}`;
export const URL_SIGNUP_PAGE = `${EnumLinkPage.AUTH}?${TYPE_AUTH_PARAM}=${EnumTypeAuth.SIGNUP}`;
