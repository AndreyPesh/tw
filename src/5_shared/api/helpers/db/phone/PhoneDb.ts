import prisma from '@/global.d';
import { TypePriceSort } from '@/src/3_features/phones/filter/fields/InputSortPrice';
import { FIELD_NOT_SPECIFIED } from '@/src/3_features/phones/filter/types/constants';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';

export type ListPhoneData = Awaited<ReturnType<PhoneDb['getAllPhones']>>;
export type PhoneData = NonNullable<
  Awaited<ReturnType<PhoneDb['getPhoneById']>>
>;

export class PhoneDb {
  getCountListPhones = async () => {
    try {
      const count = await prisma.phones.count();
      return count;
    } catch (error) {
      console.log('Error ', error);
      throw new Error((error as Error).message);
    }
  };

  getListPhonesWithFilter = async (
    options: Partial<Record<keyof FilterPhoneQueryParams, string>>,
    page: number,
    perPage: number
  ) => {
    try {
      const SKIP = Math.abs(page - 1) * perPage;
      const TAKE = perPage;
      const listPhone = await prisma.phones.findMany({
        take: TAKE,
        skip: SKIP,
        where: {
          brand: {
            some: {
              brandId: options.brand_id,
            },
          },
          price: {
            lte: options.price_max
              ? Number(options.price_max)
              : FIELD_NOT_SPECIFIED,
            gte: options.price_min
              ? Number(options.price_min)
              : FIELD_NOT_SPECIFIED,
          },
          rating: {
            lte: Number(options.rating),
          },
        },
        orderBy: {
          price: options.price_sort as TypePriceSort | undefined,
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
      return { listPhone, count: listPhone.length };
    } catch (error) {
      console.log('Error ', error);
      throw new Error((error as Error).message);
    }
  };

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
    } catch (error) {
      console.log('Error ', error);
      throw new Error((error as Error).message);
    }
  };

  getPagePhones = async (page: number, perPage: number) => {
    try {
      const SKIP = Math.abs(page - 1) * perPage;
      const TAKE = perPage;
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

  fetchListBrandPhone = async () => {
    try {
      const brandList = await prisma.phoneBrands.findMany();
      return brandList;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
}
