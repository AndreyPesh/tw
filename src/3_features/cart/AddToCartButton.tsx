import { useState, MouseEvent, FC } from 'react';
import { getSession } from 'next-auth/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMutation } from 'react-query';
import classNames from 'classnames';
import { CartData, addProductToCartFetch } from './fetch/addProductToCartFetch';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ idProduct }) => {
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
      const session = await getSession();
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
