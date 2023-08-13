import axios from 'axios';
import { PHONE_ROUTES } from './types/enum';
import { Phones } from '@prisma/client';

export class PhoneAPI {
  getAllPhones = async () => {
    try {
      const { status, data } = await axios.get<Phones[]>(PHONE_ROUTES.GET_ALL, {
        headers: { 'Content-type': 'application/json' },
      });
      return { status, data };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };
}
