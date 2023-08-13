import { PHONE_ROUTES } from '@/src/5_shared/api/phone/types/enum';
import { getDomain } from '../../helpers/getDomain';
import { PhoneData } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';

export const getPhoneData = async () => {
  try {
    // const domain = getDomain();
    const domain = 'https://tw-next.vercel.app';
    const response = await fetch(`${domain}${PHONE_ROUTES.GET_ALL}`, {
      headers: { 'Content-type': 'application/json' },
      cache: 'no-cache',
    });
    // console.log('response',  response);
    
    if (response.ok) {
      console.log(domain);
      
      const data: { data: PhoneData } = await response.json();
      console.log('DATA', data);
      
      return data;
    }
    throw new Error('Cant get data phone ');
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};
