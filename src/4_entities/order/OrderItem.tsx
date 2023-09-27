import { FC } from 'react';
import Image from 'next/image';
import { OrderData } from '@/src/5_shared/api/helpers/db/order/OrderDb';
import {
  transformDate,
  transformTime,
} from '@/src/5_shared/utils/conversion/conversionDate';
import CurrentStatusOrder from '@/src/5_shared/UI/statusOrder/StatusOrder';

interface OrderItemProps {
  order: OrderData;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const brand = order.product.brand[0].list.name;
  const { model, images } = order.product;
  const { createdAt, status } = order;

  return (
    <div className="p-4 mb-2 flex items-center border rounded-lg cursor-pointer hover:shadow-md">
      <Image
        width={30}
        height={30}
        src={images[0].url}
        alt={`order ${order.id}`}
      />
      <h2 className="font-bold">
        {brand} {model}
      </h2>
      <div className="text-[12px] self-end grow text-right">
        <CurrentStatusOrder currentStatus={status} />
        <h3 className=" text-gray-600">
          Ordered:{' '}
          <span className="font-bold">
            {transformDate(createdAt)} {transformTime(createdAt)}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default OrderItem;
