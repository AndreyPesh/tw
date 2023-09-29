import prisma from '@/global.d';
import { CreateOrderData } from '@/src/4_features/order/ui/payment/hook/usePayOrder';

export type ListOrderData = Awaited<
  ReturnType<OrderDb['getListOrdersByUserId']>
>;
export type OrderData = ListOrderData[0];

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

  getListOrdersByUserId = async (userId: string) => {
    const orders = await prisma.orders.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          include: {
            brand: { include: { list: true } },
            images: true,
          },
        },
      },
    });
    return orders;
  };
}

export default new OrderDb();
