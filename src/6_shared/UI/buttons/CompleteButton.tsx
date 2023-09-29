'use client';

import classNames from 'classnames';
import { GiConfirmed } from 'react-icons/gi';

const CompleteButton = () => {
  const isLoading = false;

  const completeOrderHandler = () => {};

  return (
    <button
      className={classNames(
        'p-2 w-[100px] inline-flex justify-between bg-red text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed',
        { 'opacity-50': isLoading }
      )}
      onClick={completeOrderHandler}
      disabled={isLoading}
    >
      {<GiConfirmed size={20} />} {'Confirm'}
    </button>
  );
};

export default CompleteButton;
