import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
  return (
    <div onClick={(e) => {e.stopPropagation()}} className="relative w-[30px] h-[65px] inline-flex items-center cursor-pointer active:scale-90 transition-all">
      <AiOutlineShoppingCart size={30} color="gray" />
      <span className="absolute top-2 right-[-12px] w-6 h-6 inline-flex items-center justify-center rounded-full text-white text-sm bg-red select-none">
        10
      </span>
    </div>
  );
};

export default Cart;
