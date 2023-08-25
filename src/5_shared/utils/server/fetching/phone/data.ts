import { PhoneBrands } from '@prisma/client';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { PHONE_ROUTES } from '@/src/5_shared/api/phone/types/enum';
import { getDomain } from '../../helpers/getDomain';
import {
  ListPhoneData,
  PhoneData,
} from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { createFilterQueryParamsFromFormData } from '@/src/3_features/phones/filter/helpers/createFilterUrlFromFormData';

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
      const data: { data: ListPhoneData } = await response.json();
      return data;
    }
    throw new Error('Cant get data phone ');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};

export const fetchPhonePage = async (
  pageNumber: number,
  searchParams: FilterPhoneQueryParams
) => {
  try {
    const domain = getDomain();
    const queryParams = createFilterQueryParamsFromFormData(searchParams);
    const response = await fetch(
      `${domain}${
        PHONE_ROUTES.GET_PHONE_PAGE
      }${pageNumber}${queryParams.replace('?', '&')}`,
      {
        headers: { 'Content-type': 'application/json' },
        cache: 'no-store',
      }
    );

    if (response.ok) {
      const data: { data: ListPhoneData } = await response.json();
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
      const data: { data: PhoneData } = await response.json();
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
