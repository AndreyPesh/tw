import { useState, MouseEvent } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classNames from 'classnames';

const AddToCartButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    if ((event.target as HTMLButtonElement).dataset.cart) {
      event.stopPropagation();
    }

    try {
      setIsLoading(true);
      await new Promise((res) => {
        setTimeout(() => {
          res(null);
        }, 1000);
      });
      setIsInCart((prev) => !prev);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
