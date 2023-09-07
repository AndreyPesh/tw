import prisma from '@/global.d';
import { CartData } from '@/src/3_features/cart/fetch/addProductToCartFetch';

const DEFAULT_QUANTITY = 1;

export default class CartDb {
  getCartListById = async (idCart: string) => {
    try {
      const cartList = await prisma.cartItem.findMany({
        where: {
          cartId: idCart,
        },
      });
      return cartList;
    } catch {
      throw new Error("Can't get cart list");
    }
  };

  addProductToCart = async ({ idCart, idProduct }: CartData) => {
    try {
      const cartItem = await prisma.cartItem.create({
        data: {
          quantity: DEFAULT_QUANTITY,
          cart: {
            connect: { id: idCart },
          },
          phone: {
            connect: { id: idProduct },
          },
        },
      });
      return cartItem ? true : false;
    } catch (error) {
      throw new Error("Can't add product to database");
    }
  };
}
