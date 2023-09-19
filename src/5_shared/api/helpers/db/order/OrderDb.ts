import prisma from '@/global.d';
import { CreateOrderData } from '@/src/3_features/order/ui/payment/hook/usePayOrder';

class OrderDb {
  addOrder = async ({
    quantity,
    price,
    userId,
    productId,
  }: CreateOrderData) => {
    try {
      await prisma.orders.create({
        data: {
          quantity,
          price,
          user: {
            connect: { id: userId },
          },
          product: {
            connect: { id: productId },
          },
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default new OrderDb();
