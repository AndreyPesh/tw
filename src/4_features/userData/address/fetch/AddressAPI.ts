import axios from 'axios';
import { Address } from '@prisma/client';
import { LIST_ROUTES } from '@/src/6_shared/api/user/types/enums';
import { AddressData } from '../UI/form/types/types';

export interface ResponseUserAddress {
  status: number;
  address: Address;
}

class AddressAPI {
  getAddress = async (userId: string) => {
    const response = await axios.get<ResponseUserAddress>(LIST_ROUTES.ADDRESS, {
      params: { userId },
    });
    return response.data;
  };
  createAddress = async (userId: string, addressData: AddressData) => {
    const response = await axios.post<ResponseUserAddress>(
      LIST_ROUTES.ADDRESS,
      {
        userId,
        addressData,
      }
    );
    return response;
  };
  updateAddress = async (userId: string, addressData: AddressData) => {
    const response = await axios.patch<ResponseUserAddress>(
      LIST_ROUTES.ADDRESS,
      {
        userId,
        addressData,
      }
    );
    return response;
  };
}

export default new AddressAPI();
