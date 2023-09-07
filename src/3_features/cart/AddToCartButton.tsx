'use client';

import { useState, MouseEvent, FC, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classNames from 'classnames';
import { checkProductInCart } from './helpers/checkProductInCart';
import { useCartQuery } from './hooks/useCartQuery';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ idProduct }) => {
  const { data: session } = useSession();
  const { listCart, addToCartFetch, removeFromCartFetch, isLoading } =
    useCartQuery();

  const [isInCart, setIsInCart] = useState(false);

  const addToCart = async (idCart: string) => {
    const isAddedInCart = await addToCartFetch({
      idCart,
      idProduct,
    });

    isAddedInCart && setIsInCart(isAddedInCart);
  };

  const removeFromCart = async (idCart: string) => {
    const isRemovedFromCart = await removeFromCartFetch({
      idCart,
      idProduct,
    });

    isRemovedFromCart && setIsInCart(false);
  };

  const addToCartHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLButtonElement).dataset.cart) {
      event.stopPropagation();
    }

    try {
      const idCart = session?.user.cart.id;

      if (idCart && !isInCart) {
        addToCart(idCart);
      }

      if (idCart && isInCart) {
        removeFromCart(idCart);
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
        { 'opacity-50': isLoading },
        { 'bg-red': !isInCart },
        { 'bg-green-700': isInCart }
      )}
      onClick={addToCartHandler}
      disabled={isLoading}
      data-cart="cart-button"
    >
      {<AiOutlineShoppingCart size={20} />} {isInCart ? 'Remove' : 'Add'}
    </button>
  );
};

export default AddToCartButton;
