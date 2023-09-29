import ListOrders from '@/src/4_features/userData/orders/ListOrders';
import { fetchListUserOrders } from '@/src/6_shared/utils/server/fetching/orders/orders';
import { getUserData } from '@/src/6_shared/utils/server/fetching/user/data';

export const metadata = {
  title: 'Orders',
  description: 'User orders page',
};

const UserOrdersPage = async () => {
  const user = await getUserData();
  if (user) {
    const orders = await fetchListUserOrders(user.id);
    if (orders) {
      return <ListOrders orders={orders} />;
    }
    return <div>List order is empty!</div>;
  }
  return <div>Not authorized!</div>;
};

export default UserOrdersPage;
