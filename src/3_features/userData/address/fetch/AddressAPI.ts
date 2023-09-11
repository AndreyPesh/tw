import axios from 'axios';
import { Address } from '@prisma/client';

class AddressAPI {
  getAddress = async (userId: string) => {
    const address = await axios.get<{ status: number; data: Address }>(
      '/api/user/account/address',
      {
        params: {userId},
      }
    );
    return address;
  };
}

export default new AddressAPI();
