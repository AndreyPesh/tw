import { CART_ROUTE } from '@/src/5_shared/api/cart/routes';
import { CartItem } from '@prisma/client';

export const addProductToCartFetch = async (
  idCart: string,
  idProduct: string
) => {
  // try {
  const response = await fetch(`${CART_ROUTE.ADD_PRODUCT}`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      idCart,
      idProduct,
    }),
  });

  if (response.ok) {
    const data: { data: CartItem } = await response.json();
    return data;
  }
};
