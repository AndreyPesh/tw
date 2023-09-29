import { FC } from 'react';
import OrderItem from '@/src/5_entities/order/OrderItem';
import { ListOrderData } from '@/src/6_shared/api/helpers/db/order/OrderDb';

interface ListOrdersProps {
  orders: ListOrderData;
}

const ListOrders: FC<ListOrdersProps> = ({ orders }) => {
  return (
    <div className="p-2 w-full flex-col">
      <h2 className="p-4 font-bold text-center text-lg">List order</h2>
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  );
};

export default ListOrders;
