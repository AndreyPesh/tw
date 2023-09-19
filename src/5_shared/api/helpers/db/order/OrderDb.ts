import prisma from "@/global";

class OrderDb {
  addOrder = async () => {
    try {
      // await prisma.orders.create({
      //   data: {
      //     quantity: DEFAULT_QUANTITY,
      //     cart: {
      //       connect: { id: idCart },
      //     },
      //     phone: {
      //       connect: { id: idProduct },
      //     },
      //   },
      // });
      return true;
    } catch {
      return false;
    }
  };
}

export default new OrderDb()