'use client';

import CartItem from '../3_features/cart/CartItem';
import { useCartQuery } from '../3_features/cart/hooks/useCartQuery';
import Loader from '../5_shared/loader/Loader';

const Cart = () => {
  const { listCart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {listCart ? (
        listCart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <h2>Cart empty</h2>
      )}
    </div>
  );
};

export default Cart;
