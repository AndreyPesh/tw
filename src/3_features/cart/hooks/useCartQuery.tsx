import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from 'react-query';
import { QUERY_LIST_CART_KEY } from '../types/constants';
import CartFetchApi, { CartData } from '../fetch/CartFetchApi';

export const useCartQuery = () => {
  const { data: session } = useSession();
  const id = session?.user ? session.user.cart.id : '';

  const { data: listCart, isLoading: isLoadingCart } = useQuery(
    [QUERY_LIST_CART_KEY, id],
    () => CartFetchApi.getCartListFetch(id)
  );

  const { mutateAsync: addToCartFetch, isLoading: isLoadingAddToCart } =
    useMutation(
      [QUERY_LIST_CART_KEY, id],
      ({ idCart, idProduct }: CartData) => {
        return CartFetchApi.addProductToCartFetch({ idCart, idProduct });
      }
    );

  const {
    mutateAsync: removeFromCartFetch,
    isLoading: isLoadingRemoveFromCart,
  } = useMutation(
    [QUERY_LIST_CART_KEY, id],
    ({ idCart, idProduct }: CartData) => {
      return CartFetchApi.removeProductProductCartFetch({ idCart, idProduct });
    }
  );

  const isLoading =
    isLoadingCart || isLoadingAddToCart || isLoadingRemoveFromCart;

  return { listCart, addToCartFetch, removeFromCartFetch, isLoading };
};
