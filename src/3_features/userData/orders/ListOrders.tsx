import { FC } from 'react';
import OrderItem from '@/src/4_entities/order/OrderItem';
import { ListOrderData } from '@/src/5_shared/api/helpers/db/order/OrderDb';

interface ListOrdersProps {
  orders: ListOrderData;
}

const ListOrders: FC<ListOrdersProps> = ({ orders }) => {
  return (
    <div className="flex-col">
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  );
};

export default ListOrders;
