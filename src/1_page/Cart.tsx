'use client';

import { useCartQuery } from '../3_features/cart/hooks/useCartQuery';
import Loader from '../5_shared/loader/Loader';
import CartProductItem from '../3_features/cart/CartProductItem';
import EmptyCart from '../3_features/cart/EmptyCart';
import OrderDescriptionModal from '../3_features/order/ui/OrderDescriptionModal';

const Cart = () => {
  const { listCart, isLoading } = useCartQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2 className="p-2 text-center font-bold text-lg">Shopping cart</h2>
      {listCart?.length === 0 && <EmptyCart />}
      {listCart && (
        <>
          <div className="flex flex-col w-full">
            {listCart.map((cartItem) => (
              <CartProductItem key={cartItem.id} cartItemData={cartItem} />
            ))}
          </div>
          <OrderDescriptionModal />
        </>
      )}
    </div>
  );
};

export default Cart;
