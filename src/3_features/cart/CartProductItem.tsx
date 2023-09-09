import { FC } from 'react';
import Image from 'next/image';
import { ItemProductInCartData } from '@/src/5_shared/api/helpers/db/cart/CartDb';

interface CartItemProps {
  cartItem: ItemProductInCartData;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { phone, quantity } = cartItem;

  const imageSrc = phone.images[0].url;

  return (
    <div className="my-2 p-4 border rounded-lg">
      <h2>PhoneId: {phone.model}</h2>
      <h2>Quantity: {quantity}</h2>
      <Image width={200} height={200} alt="image" src={imageSrc} />
    </div>
  );
};

export default CartItem;
