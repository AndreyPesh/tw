import prisma from '@/global.d';
import { getConditionForFilterPhone } from './helpers/getConditionForFilterPhone';
import { ListAppliedFilterOptions } from '@/src/3_features/phones/filter/types/types';

export type ListPhoneData = Awaited<ReturnType<PhoneDb['getAllPhones']>>;
export type PhoneData = NonNullable<
  Awaited<ReturnType<PhoneDb['getPhoneById']>>
>;

export type OrderProductData = Omit<PhoneData, 'details'>;

export class PhoneDb {
  getCountListPhones = async (optionsFilter: ListAppliedFilterOptions) => {
    try {
      const conditionCount = getConditionForFilterPhone(optionsFilter);
      const count = await prisma.phones.count({
        ...conditionCount,
      });
      return count;
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
          details: true,
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

  getPagePhones = async (
    page: number,
    perPage: number,
    optionsFilter: ListAppliedFilterOptions
  ) => {
    try {
      const SKIP = Math.abs(page - 1) * perPage;
      const TAKE = perPage;
      const conditionFilter = getConditionForFilterPhone(optionsFilter);
      const listPhones = await prisma.phones.findMany({
        take: TAKE,
        skip: SKIP,
        ...conditionFilter,
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
          details: true,
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
