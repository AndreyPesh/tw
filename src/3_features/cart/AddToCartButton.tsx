'use client';

import { useState, MouseEvent, FC, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMutation, useQuery } from 'react-query';
import classNames from 'classnames';
import { QUERY_LIST_CART_KEY } from './types/constants';
import { checkProductInCart } from './helpers/checkProductInCart';
import CartFetchApi, { CartData } from './fetch/CartFetchApi';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ idProduct }) => {
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

  const { mutateAsync: removeFromCartFetch, isLoading } = useMutation(
    [QUERY_LIST_CART_KEY, id],
    ({ idCart, idProduct }: CartData) => {
      return CartFetchApi.removeProductProductCartFetch({ idCart, idProduct });
    }
  );

  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLButtonElement).dataset.cart) {
      event.stopPropagation();
    }

    try {
      const idCart = session?.user.cart.id;

      if (idCart && !isInCart) {
        const isAddedInCart = await addToCartFetch({
          idCart,
          idProduct,
        });

        isAddedInCart && setIsInCart(isAddedInCart);
      }

      if (idCart && isInCart) {
        const isRemovedFromCart = await removeFromCartFetch({
          idCart,
          idProduct,
        });

        isRemovedFromCart && setIsInCart(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (listCart && listCart.length > 0) {
      const isProductInCart = checkProductInCart(listCart, idProduct);
      setIsInCart(isProductInCart);
    }
  }, [listCart]);

  return (
    <button
      className={classNames(
        'p-2 w-[100px] inline-flex justify-between text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed',
        { 'opacity-50': isLoading || isLoadingCart || isLoadingAddToCart},
        { 'bg-red': !isInCart },
        { 'bg-green-700': isInCart }
      )}
      onClick={addToCartHandler}
      disabled={isLoading || isLoadingCart || isLoadingAddToCart}
      data-cart="cart-button"
    >
      {<AiOutlineShoppingCart size={20} />} {isInCart ? 'Remove' : 'Add'}
    </button>
  );
};

export default AddToCartButton;
