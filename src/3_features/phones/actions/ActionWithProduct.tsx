'use client';

import AddToCartButton from '@/src/5_shared/UI/buttons/AddToCartButton';
import BuyNowButton from '@/src/5_shared/UI/buttons/BuyNowButton';

const ActionWithProduct = () => {
  return (
    <div className="py-4 w-full md:w-[50%] inline-flex justify-around ">
      <BuyNowButton />
      <AddToCartButton />
    </div>
  );
};

export default ActionWithProduct;
