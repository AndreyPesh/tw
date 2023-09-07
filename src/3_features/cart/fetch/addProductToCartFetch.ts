import axios from 'axios';
import { CART_ROUTE } from '@/src/5_shared/api/cart/routes';

export interface CartData {
  idCart: string;
  idProduct: string;
}

export const addProductToCartFetch = async ({
  idCart,
  idProduct,
}: CartData) => {
  const response = await axios.post<boolean>(CART_ROUTE.CART_API, {
    idCart,
    idProduct,
  });
  return response.data;
};
