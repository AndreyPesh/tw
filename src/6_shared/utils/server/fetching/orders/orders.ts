import OrderDb, {
  ListOrderData,
} from '@/src/6_shared/api/helpers/db/order/OrderDb';

export const fetchListUserOrders = async (userId: string) => {
  try {
    const orders: ListOrderData = await OrderDb.getListOrdersByUserId(userId);
    return orders;
  } catch (error) {
    console.log((error as Error).message);
  }
};
