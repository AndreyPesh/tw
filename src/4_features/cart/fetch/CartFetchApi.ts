import axios from 'axios';
import { CART_ROUTE } from '@/src/6_shared/api/cart/routes';
import { ListDataProductInCart } from '@/src/6_shared/api/helpers/db/cart/CartDb';

export interface CartData {
  idCart: string;
  idProduct: string;
}

class CartFetchApi {
  getCartListFetch = async (idCart: string): Promise<ListDataProductInCart> => {
    const response = await axios.get<ListDataProductInCart>(
      CART_ROUTE.CART_API,
      {
        params: { idCart },
      }
    );
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
