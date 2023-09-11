'use client';

import AddToCartButton from '@/src/3_features/cart/AddToCartButton';
import { FC } from 'react';
import PaymentOrder from '../../order/PaymentOrder';

interface ActionWithProductProps {
  idProduct: string;
}

const ActionWithProduct: FC<ActionWithProductProps> = ({ idProduct }) => {
  return (
    <div className="py-4 w-full md:w-[50%] inline-flex justify-around ">
      <PaymentOrder />
      <AddToCartButton idProduct={idProduct} />
    </div>
  );
};

export default ActionWithProduct;
