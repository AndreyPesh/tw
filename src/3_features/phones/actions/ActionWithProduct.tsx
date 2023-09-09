'use client';

import AddToCartButton from '@/src/3_features/cart/AddToCartButton';
import BuyNowButton from '@/src/5_shared/UI/buttons/BuyNowButton';
import { FC } from 'react';

interface ActionWithProductProps {
  idProduct: string;
}

const ActionWithProduct: FC<ActionWithProductProps> = ({ idProduct }) => {
  return (
    <div className="py-4 w-full md:w-[50%] inline-flex justify-around ">
      <BuyNowButton />
      <AddToCartButton idProduct={idProduct} />
    </div>
  );
};

export default ActionWithProduct;
