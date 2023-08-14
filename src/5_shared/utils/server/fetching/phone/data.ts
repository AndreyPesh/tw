import { PHONE_ROUTES } from '@/src/5_shared/api/phone/types/enum';
import { getDomain } from '../../helpers/getDomain';
import { ListPhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

export const getPhoneData = async () => {
  try {
    const domain = getDomain();
    const response = await fetch(`${domain}${PHONE_ROUTES.GET_ALL}`, {
      headers: { 'Content-type': 'application/json' },
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
