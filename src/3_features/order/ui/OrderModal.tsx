'use client';

import Modal from '@/src/5_shared/modal/common/Modal';
import useOrderModalStore from '../state/modal/state';
import Order from '../Order';

const OrderDescriptionModal = () => {
  return <Modal management={useOrderModalStore} children={<Order />} />;
};

export default OrderDescriptionModal;
