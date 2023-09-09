'use client';

import { useCartQuery } from '../3_features/cart/hooks/useCartQuery';
import Loader from '../5_shared/loader/Loader';
import CartProvider from '../3_features/cart/CartProvider';

const Cart = () => {
  const { listCart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {listCart ? <CartProvider listCart={listCart} /> : <h2>Cart empty</h2>}
    </div>
  );
};

export default Cart;
