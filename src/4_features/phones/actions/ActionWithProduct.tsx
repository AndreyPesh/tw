'use client';

import { FC } from 'react';
import AddToCartButton from '@/src/4_features/cart/AddToCartButton';
import { PhoneData } from '@/src/6_shared/api/helpers/db/phone/PhoneDb';
import OrderButton from '@/src/6_shared/UI/buttons/OrderButton';

const DEFAULT_QUANTITY = 1;

interface ActionWithProductProps {
  productData: PhoneData;
}

const ActionWithProduct: FC<ActionWithProductProps> = ({ productData }) => {
  return (
    <div className="py-4 w-full md:w-[50%] inline-flex justify-around ">
      <OrderButton productData={productData} quantity={DEFAULT_QUANTITY} />
      <AddToCartButton idProduct={productData.id} />
    </div>
  );
};

export default ActionWithProduct;
