import { CART_ROUTE } from '@/src/5_shared/api/cart/routes';
import { CartItem } from '@prisma/client';
import axios from 'axios';

export interface CartData {
  idCart: string;
  idProduct: string;
}

class CartFetchApi {
  getCartListFetch = async (idCart: string): Promise<Array<CartItem>> => {
    const response = await axios.get<Array<CartItem>>(CART_ROUTE.CART_API, {
      params: { idCart },
    });
    return response.data;
  };

  addProductToCartFetch = async ({ idCart, idProduct }: CartData) => {
    const response = await axios.post<boolean>(CART_ROUTE.CART_API, {
      idCart,
      idProduct,
    });
    return response.data;
  };

  removeProductProductCartFetch = async ({ idCart, idProduct }: CartData) => {
    const response = await axios.delete<boolean>(CART_ROUTE.CART_API, {
      params: { idCart, idProduct },
    });
    return response.data;
  };
}

export default new CartFetchApi();
