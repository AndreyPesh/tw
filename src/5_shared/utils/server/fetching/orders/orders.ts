import OrderDb from '@/src/5_shared/api/helpers/db/order/OrderDb';

export const fetchListUserOrders = async (userId: string) => {
  try {
    const orders = await OrderDb.getListOrdersByUserId(userId);
    return orders;
  } catch (error) {
    console.log((error as Error).message);
  }
};
