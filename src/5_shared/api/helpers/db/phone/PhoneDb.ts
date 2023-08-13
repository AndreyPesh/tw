import prisma from '@/global.d';

export type PhoneData = Awaited<ReturnType<PhoneDb['getAllPhones']>>;

export class PhoneDb {
  getAllPhones = async () => {
    try {
      const listPhones = await prisma.phones.findMany({
        include: {
          images: true,
          brand: {
            include: {
              list: true,
            },
          },
        },
      });
      return listPhones;
    } catch(error) {
      console.log('Error ',error)
      throw new Error((error as Error).message);
    }
  };
}
