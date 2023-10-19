import prisma from '@/global.d';
import { getConditionForFilterPhone } from './helpers/getConditionForFilterPhone';
import { ListAppliedFilterOptions } from '@/src/4_features/phones/filter/types/types';

export type ProductListData = Awaited<ReturnType<ProductDb['getAllProducts']>>;
export type ProductData = NonNullable<
  Awaited<ReturnType<ProductDb['fetchProductById']>>
>;

export type OrderProductData = Omit<ProductData, 'details'>;

export class ProductDb {
  getCountListProducts = async (optionsFilter: ListAppliedFilterOptions) => {
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

  getAllProducts = async () => {
    try {
      const listProducts = await prisma.phones.findMany({
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
      return listProducts;
    } catch (error) {
      console.log('Error ', error);
      throw new Error((error as Error).message);
    }
  };

  fetchProductPage = async (
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

  fetchProductById = async (id: string) => {
    try {
      const productData = await prisma.phones.findUnique({
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
      return productData;
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
