import prisma from '@/global.d';

export default class CartDb {
  addProductToCart = async (
    idCart: string,
    idPhone: string,
    quantity: number
  ) => {
    try {
      const cartItem = await prisma.cartItem.create({
        data: {
          quantity,
          cart: {
            connect: { id: idCart },
          },
          phone: {
            connect: { id: idPhone },
          },
        },
      });
      return cartItem;
    } catch (error) {
      throw new Error("Can't add product to database");
    }
  };
}
