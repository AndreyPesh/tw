import prisma from '@/global.d';

export type ListPhoneData = Awaited<ReturnType<PhoneDb['getAllPhones']>>;
export type PhoneData = NonNullable<
  Awaited<ReturnType<PhoneDb['getPhoneById']>>
>;

export class PhoneDb {
  getAllPhones = async (numberPage: number) => {
    try {
      const SKIP = (numberPage - 1) * 4;
      const TAKE = 4;
      const listPhones = await prisma.phones.findMany({
        take: TAKE,
        skip: SKIP,
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
    } catch (error) {
      console.log('Error ', error);
      throw new Error((error as Error).message);
    }
  };

  getPhoneById = async (id: string) => {
    try {
      const phoneData = await prisma.phones.findUnique({
        where: {
          id,
        },
        include: {
          images: true,
          brand: {
            include: {
              list: true,
            },
          },
        },
      });
      return phoneData;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
}
