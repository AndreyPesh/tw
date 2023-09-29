import { FC } from 'react';
import { PiContactlessPaymentLight } from 'react-icons/pi';
import useOrderModalStore from '@/src/4_features/order/state/modal/state';
import { OrderProductData } from '../../api/helpers/db/phone/PhoneDb';
import useOrderStore from '@/src/4_features/order/state/state';
import { createOrderDataFromProductData } from '@/src/4_features/order/helpers/createOrderDataFromProductData';

interface OrderButtonProps {
  productData: OrderProductData;
  quantity: number;
}

const OrderButton: FC<OrderButtonProps> = ({ productData, quantity }) => {
  const { createOrder } = useOrderStore();
  const { openModal } = useOrderModalStore();

  const orderHandler = () => {
    const orderData = createOrderDataFromProductData(productData, quantity);
    createOrder(orderData);
    openModal();
  };

  return (
    <button
      className="p-2 w-[100px] inline-flex justify-between bg-green-600 text-white text-sm rounded hover:shadow-bg transform active:scale-90 transition-transform disabled:scale-100 disabled:cursor-not-allowed"
      onClick={orderHandler}
    >
      {<PiContactlessPaymentLight size={20} />} {'Buy now'}
    </button>
  );
};

export default OrderButton;
