import BuyNowButton from '@/src/5_shared/UI/buttons/BuyNowButton';
import useOrderModalStore from './ui/modal/state';
import Modal from '@/src/5_shared/modal/common/Modal';

const PaymentOrder = () => {
  const { isShow, openModal, closeModal } = useOrderModalStore();
  return (
    <div>
      <BuyNowButton />
      <Modal management={useOrderModalStore} />
    </div>
  );
};

export default PaymentOrder;
