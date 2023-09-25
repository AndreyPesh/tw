export const enum EnumLinkPage {
  HOME = '/',
  PRODUCTS = '/products/phones/page/1',
  PHONE_PAGE = '/products/phones/page/',
  DETAILS = '/products/phones/details/',
  CONTACTS = '/contacts',
  AUTH = '/auth',
  USER = '/user',
  CART = '/cart',
}

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
