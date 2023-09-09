import { FC } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { CartItem } from '@prisma/client';
import CartProductItem from './CartProductItem';

interface CartProviderItemProps {
  listCart: Array<CartItem>;
}

const CartProvider: FC<CartProviderItemProps> = ({ listCart }) => {
  const listIdPhones = listCart?.map((item) => item.phoneId);

  const { data } = useQuery([], async () => {
    return await axios.post('/api/phone/group-by-id', listIdPhones);
  });
  return (
    <div className="flex flex-col w-full">
      {listCart.map((cartItem) => (
        <CartProductItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartProvider;
