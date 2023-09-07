import { CartItem } from '@prisma/client';

export const checkProductInCart = (
  listCart: Array<CartItem>,
  idProduct: string
) => {
  return listCart.some((cartItem) => cartItem.phoneId === idProduct);
};
