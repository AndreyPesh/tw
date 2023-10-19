import { PhoneBrands } from '@prisma/client';
import { FilterPhoneQueryParams } from '@/src/4_features/phones/filter/types/interfaces';
import { PHONE_ROUTES } from '@/src/6_shared/api/phone/types/enum';
import { getDomain } from '../../helpers/getDomain';
import {
  ProductListData,
  ProductData,
} from '@/src/6_shared/api/helpers/db/phone/ProductDb';
import { createFilterQueryParamsFromFormData } from '@/src/4_features/phones/filter/helpers/createFilterUrlFromFormData';
import { ProductPageProps } from './types/interfaces';

export const fetchCountListPhone = async (
  searchParams?: FilterPhoneQueryParams
) => {
  try {
    const queryParams =
      searchParams && createFilterQueryParamsFromFormData(searchParams);
    const domain = getDomain();
    const response = await fetch(
      `${domain}${PHONE_ROUTES.GET_COUNT}${queryParams}`,
      {
        headers: { 'Content-type': 'application/json' },
        cache: 'no-store',
      }
    );

    if (response.ok) {
      const { data }: { data: number } = await response.json();
      return data;
    }
    throw new Error('Cant get count phone list');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

export const fetchAllPhones = async () => {
  try {
    const domain = getDomain();
    const response = await fetch(`${domain}${PHONE_ROUTES.GET_ALL}`, {
      headers: { 'Content-type': 'application/json' },
      cache: 'no-store',
    });

    if (response.ok) {
      const data: { data: ProductListData } = await response.json();
      return data;
    }
    throw new Error('Cant get data phone ');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

export const fetchPhonePage = async ({
  page,
  searchParams,
}: ProductPageProps) => {
  try {
    const domain = getDomain();
    const queryParams = createFilterQueryParamsFromFormData(searchParams);
    const response = await fetch(
      `${domain}${PHONE_ROUTES.GET_PHONE_PAGE}${page}${queryParams.replace(
        '?',
        '&'
      )}`,
      {
        headers: { 'Content-type': 'application/json' },
        cache: 'no-store',
      }
    );

    if (response.ok) {
      const data: { data: ProductListData } = await response.json();
      return data;
    }
    throw new Error('Cant get data phone ');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

export const getPhoneDataById = async (id: string) => {
  try {
    const domain = getDomain();
    const response = await fetch(`${domain}${PHONE_ROUTES.GET_BY_ID}${id}`, {
      headers: { 'Content-type': 'application/json' },
      cache: 'no-cache',
    });

    if (response.ok) {
      const data: { data: ProductData } = await response.json();
      return data;
    }
    throw new Error('Cant get phone data by ID');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

export const fetchBrandListPhone = async () => {
  try {
    const domain = getDomain();
    const response = await fetch(`${domain}${PHONE_ROUTES.GET_LIST_BRAND}`, {
      headers: { 'Content-type': 'application/json' },
    });

    if (response.ok) {
      const data: { data: PhoneBrands[] } = await response.json();
      return data;
    }
    throw new Error('Cant get list brand phone');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};
