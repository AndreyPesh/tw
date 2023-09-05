import { useState } from 'react';
import { PiContactlessPaymentLight } from 'react-icons/pi';
import classNames from 'classnames';

const BuyNowButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const orderHandler = async () => {
    try {
      setIsLoading(true);
      await new Promise((res) => {
        setTimeout(() => {
          res(null);
        }, 1000);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={classNames(
        'p-2 w-[100px] inline-flex justify-between bg-green-600 text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed',
        { 'opacity-50': isLoading }
      )}
      onClick={orderHandler}
      disabled={isLoading}
    >
      {<PiContactlessPaymentLight size={20} />} {'Buy now'}
    </button>
  );
};

export default BuyNowButton;
