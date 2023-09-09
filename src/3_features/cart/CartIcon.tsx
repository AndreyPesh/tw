import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartQuery } from './hooks/useCartQuery';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EnumLinkPage } from '@/src/5_shared/types/enum';

const CartIcon = () => {
  const [countCartItem, setCountCartItem] = useState(0);
  const { listCart } = useCartQuery();
  const router = useRouter();

  useEffect(() => {
    const countItem = listCart?.length;
    if (listCart && countItem) {
      setCountCartItem(countItem);
    }
  }, [listCart, listCart?.length]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        router.push(EnumLinkPage.CART)
      }}
      className="relative w-[30px] h-[65px] inline-flex items-center cursor-pointer active:scale-90 transition-all"
    >
      <AiOutlineShoppingCart size={30} color="gray" />
      <span className="absolute top-2 right-[-12px] w-6 h-6 inline-flex items-center justify-center rounded-full text-white text-sm bg-red select-none">
        {countCartItem}
      </span>
    </div>
  );
};

export default CartIcon;
