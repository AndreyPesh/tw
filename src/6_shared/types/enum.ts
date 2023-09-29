import { EnumLinkPage } from '../constants/main_navigation/enums';

export const enum EnumTypeAuth {
  SIGNUP = 'signup',
  LOGIN = 'login',
}

export const enum EnumUserAccountLink {
  PERSONAL = EnumLinkPage.USER,
  ORDERS = EnumLinkPage.USER + '/orders',
  CART = EnumLinkPage.USER + '/cart',
  COMMENTS = EnumLinkPage.USER + '/comments',
}
