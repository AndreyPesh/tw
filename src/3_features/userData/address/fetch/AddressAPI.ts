import axios from 'axios';
import { Address } from '@prisma/client';
import { LIST_ROUTES } from '@/src/5_shared/api/types/enums';

interface ResponseUserAddress {
  status: number;
  address: Address;
}

class AddressAPI {
  getAddress = async (userId: string) => {
    const response = await axios.get<ResponseUserAddress>(LIST_ROUTES.ADDRESS, {
      params: { userId },
    });
    return response;
  };
}

export default new AddressAPI();
