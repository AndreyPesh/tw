'use client';

import OrderDescription from '../OrderDescription';
import Modal from '@/src/5_shared/modal/common/Modal';
import useOrderModalStore from '../state/modal/state';

const OrderDescriptionModal = () => {
  return (
    <Modal management={useOrderModalStore} children={<OrderDescription />} />
  );
};

export default OrderDescriptionModal;
