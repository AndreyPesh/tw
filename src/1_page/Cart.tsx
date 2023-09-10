'use client';

import { useCartQuery } from '../3_features/cart/hooks/useCartQuery';
import Loader from '../5_shared/loader/Loader';
import CartProductItem from '../3_features/cart/CartProductItem';

const Cart = () => {
  const { listCart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {listCart ? (
        <div className="flex flex-col w-full">
          {listCart.map((cartItem) => (
            <CartProductItem key={cartItem.id} cartItemData={cartItem} />
          ))}
        </div>
      ) : (
        <h2>Cart empty</h2>
      )}
    </div>
  );
};

export default Cart;
