import { FC } from 'react';
import { CartItem } from '@prisma/client';

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { phoneId, quantity } = cartItem;
  return (
    <div className='my-2 p-4 border rounded-lg'>
      <h2>PhoneId: {phoneId}</h2>
      <h2>Quantity: {quantity}</h2>
    </div>
  );
};

export default CartItem;
