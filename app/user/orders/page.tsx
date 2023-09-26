import { fetchListUserOrders } from '@/src/5_shared/utils/server/fetching/orders/orders';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Orders',
  description: 'User orders page',
};

const UserOrdersPage = async () => {
  const user = await getUserData();
  if (user) {
    const orders = await fetchListUserOrders(user.id);
    return <div className='flex-col'>
      {orders?.map((order) => <h1>{order.productId}</h1>)}
    </div>
  }
  return <div>List order is empty!</div>;
};

export default UserOrdersPage;
