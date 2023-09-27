import { FC } from 'react';
import Image from 'next/image';
import { OrderData } from '@/src/5_shared/api/helpers/db/order/OrderDb';
import { transformDate } from '@/src/5_shared/utils/conversion/conversionDate';

interface OrderItemProps {
  order: OrderData;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const brand = order.product.brand[0].list.name;
  const { model, images } = order.product;
  console.log(order.createdAt);
  transformDate(order.createdAt);
  return (
    <div className="p-4 mb-2 flex items-center border rounded-lg cursor-pointer">
      <Image
        width={50}
        height={50}
        src={images[0].url}
        alt={`order ${order.id}`}
      />
      <h2 className="font-bold">
        {brand} {model}
      </h2>
      <div className="self-end">
        <h3>
          Ordered: <span>{transformDate(order.createdAt)}</span>
        </h3>
      </div>
    </div>
  );
};

export default OrderItem;
