import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OrderData } from '@/src/5_shared/api/helpers/db/order/OrderDb';
import {
  transformDate,
  transformTime,
} from '@/src/5_shared/utils/conversion/conversionDate';
import CurrentStatusOrder from '@/src/5_shared/UI/statusOrder/StatusOrder';
import CompleteButton from '@/src/5_shared/UI/buttons/CompleteButton';

interface OrderItemProps {
  order: OrderData;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const brand = order.product.brand[0].list.name;
  const { id: productId, model, images } = order.product;
  const { createdAt, status, price, quantity } = order;

  return (
    <div className="p-4 mb-2 flex flex-col md:flex-row justify-between items-center border rounded-lg cursor-pointer hover:shadow-md">
      <div className="md:w-[50%] max-w-lg flex items-center">
        <Image
          width={30}
          height={30}
          src={images[0].url}
          alt={`order ${order.id}`}
        />
        <Link
          href={`/products/phones/details/${productId}`}
          className="font-bold hover:underline"
        >
          {brand} {model}
        </Link>
      </div>
      <div className="py-4 md:py-0">
        <CompleteButton />
      </div>
      <div className="px-4">
        <p className="font-bold text-center text-sm">Quantity: {quantity}</p>
        <p className="font-bold text-end">Price: {price} &#36;</p>
      </div>
      <div className="text-[12px] self-end text-right">
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
