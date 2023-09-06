import { useState, MouseEvent } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMutation } from 'react-query';
import classNames from 'classnames';
import { addProductToCartFetch } from '../../utils/server/fetching/cart/cart';
import { getSession, useSession } from 'next-auth/react';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton = () => {
  const { mutateAsync, isLoading } = useMutation(
    ({ idCart, idProduct }: { idCart: string; idProduct: string }) => {
      return addProductToCartFetch(idCart, idProduct);
    }
  );

  // const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLButtonElement).dataset.cart) {
      event.stopPropagation();
    }

    try {
      const session = await getSession()
      // setIsLoading(true);
      // await new Promise((res) => {
      //   setTimeout(() => {
      //     res(null);
      //   }, 1000);
      // });
      // await addProductToCartFetch('idCart', 'idProduct', 1)
      console.log(session);
      
      await mutateAsync({
        idCart: 'idCart',
        idProduct: 'idProduct',
      });
      setIsInCart((prev) => !prev);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
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
