import { PiContactlessPaymentLight } from 'react-icons/pi';
import useOrderModalStore from '@/src/3_features/order/ui/modal/state';

const BuyNowButton = () => {
  const { openModal } = useOrderModalStore();

  return (
    <button
      className="p-2 w-[100px] inline-flex justify-between bg-green-600 text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed"
      onClick={openModal}
    >
      {<PiContactlessPaymentLight size={20} />} {'Buy now'}
    </button>
  );
};

export default BuyNowButton;
