'use client';

import { useState, MouseEvent, FC, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMutation, useQuery } from 'react-query';
import classNames from 'classnames';
import { CartData, addProductToCartFetch } from './fetch/addProductToCartFetch';
import { getCartListFetch } from './fetch/getCartListFetch';
import { QUERY_LIST_CART_KEY } from './types/constants';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ idProduct }) => {
  const { data: session } = useSession();
  const id = session?.user ? session.user.cart.id : '';
  console.log(QUERY_LIST_CART_KEY, id);

  const {
    data: listCart,
    isLoading: isLoadingCart,
  } = useQuery([QUERY_LIST_CART_KEY, id], () => getCartListFetch(id));

  const { mutateAsync, isLoading } = useMutation(
    ({ idCart, idProduct }: CartData) => {
      return addProductToCartFetch({ idCart, idProduct });
    }
  );

  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLButtonElement).dataset.cart) {
      event.stopPropagation();
    }

    try {
      const idCart = session?.user.cart.id;

      if (idCart) {
        const isAddedInCart = await mutateAsync({
          idCart,
          idProduct,
        });

        setIsInCart(isAddedInCart);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('List cart', listCart);
  }, [listCart]);

  return (
    <button
      className={classNames(
        'p-2 w-[100px] inline-flex justify-between text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed',
        { 'opacity-50': isLoading },
        { 'bg-red': !isInCart },
        { 'bg-green-700': isInCart }
      )}
      onClick={addToCartHandler}
      disabled={isLoading || isLoadingCart}
      data-cart="cart-button"
    >
      {<AiOutlineShoppingCart size={20} />} {isInCart ? 'Remove' : 'Add'}
    </button>
  );
};

export default AddToCartButton;
