import { FC } from 'react';
import Image from 'next/image';
import { OrderData } from '@/src/5_shared/api/helpers/db/order/OrderDb';

interface OrderItemProps {
  order: OrderData;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const brand = order.product.brand[0].list.name;
  const { model, images } = order.product;

  return (
    <div className="p-4">
      <Image
        width={50}
        height={50}
        src={images[0].url}
        alt={`order ${order.id}`}
      />
      <h2>
        {brand} {model}
      </h2>
    </div>
  );
};

export default OrderItem;
