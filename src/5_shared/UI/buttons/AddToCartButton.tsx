import classNames from 'classnames';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const AddToCartButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const addToCartHandler = async () => {
    console.log('add');

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
        'p-2 w-[100px] inline-flex justify-between bg-red text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed',
        { 'opacity-50': isLoading },
        { 'bg-green-700': isInCart }
      )}
      onClick={addToCartHandler}
      disabled={isLoading}
    >
      {<AiOutlineShoppingCart size={20} />} {isInCart ? 'Remove' : 'Add'}
    </button>
  );
};

export default AddToCartButton;
