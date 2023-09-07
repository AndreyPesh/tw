import { CART_ROUTE } from '@/src/5_shared/api/cart/routes';
import { CartItem } from '@prisma/client';
import axios from 'axios';

export const getCartListFetch = async (
  idCart: string
): Promise<Array<CartItem>> => {
  const response = await axios.get<Array<CartItem>>(CART_ROUTE.CART_API, {
    params: { idCart },
  });
  return response.data;
};
