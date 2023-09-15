'use client';

import { FC } from 'react';
import AddToCartButton from '@/src/3_features/cart/AddToCartButton';
import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import OrderButton from '@/src/5_shared/UI/buttons/OrderButton';

interface ActionWithProductProps {
  productData: PhoneData;
}

const ActionWithProduct: FC<ActionWithProductProps> = ({ productData }) => {
  return (
    <>
      <div className="py-4 w-full md:w-[50%] inline-flex justify-around ">
        <OrderButton productData={productData} />
        <AddToCartButton idProduct={productData.id} />
      </div>
    </>
  );
};

export default ActionWithProduct;
