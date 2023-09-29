import prisma from '@/global.d';
import { CartData } from '@/src/4_features/cart/fetch/CartFetchApi';

const DEFAULT_QUANTITY = 1;

export type ListDataProductInCart = Awaited<
  ReturnType<CartDb['getCartListById']>
>;

export type ItemProductInCartData = ListDataProductInCart[0];

export default class CartDb {
  getCartListById = async (idCart: string) => {
    try {
      const cartList = await prisma.cartItem.findMany({
        where: {
          cartId: idCart,
        },
        include: {
          phone: {
            include: {
              images: true,
              brand: {
                include: {
                  list: true,
                },
              },
            },
          },
        },
      });
      return cartList;
    } catch {
      return [];
    }
  };

  addProductToCart = async ({ idCart, idProduct }: CartData) => {
    try {
      await prisma.cartItem.create({
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
      return true;
    } catch {
      return false;
    }
  };

  removeProductFromCart = async ({ idCart, idProduct }: CartData) => {
    try {
      await prisma.cartItem.delete({
        where: {
          unique_item: {
            cartId: idCart,
            phoneId: idProduct,
          },
        },
      });
      return true;
    } catch {
      return false;
    }
  };
}
