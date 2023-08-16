import { PHONE_ROUTES } from '@/src/5_shared/api/phone/types/enum';
import { getDomain } from '../../helpers/getDomain';
import {
  ListPhoneData,
  PhoneData,
} from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import axios from 'axios';

export const getPhoneData = async () => {
  try {
    // const domain = getDomain();
    const DOMAIN = 'https://tw-next.vercel.app/';
    // console.log('DOMAIN ', domain);

    // const response = await fetch(
    //   `${'https://tw-next.vercel.app/'}${PHONE_ROUTES.GET_ALL}`,
    //   {
    //     headers: { 'Content-type': 'application/json' },
    //     cache: 'no-cache',
    //   }
    // );
    const response = await axios.get(`${DOMAIN}${PHONE_ROUTES.GET_ALL}`, {
      headers: { 'Content-type': 'application/json' },
    });

    return response.data;
    // if (response.ok) {
    //   const data: { data: ListPhoneData } = await response.json();
    //   console.log('Data ', data);
    //   return data;
    // }
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
