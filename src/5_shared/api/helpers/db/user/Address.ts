import prisma from '@/global.d';
import { AddressData } from '@/src/3_features/userData/address/UI/form/types/types';

class AddressDB {
  getAddress = async (userId: string) => {
    const address = await prisma.address.findUnique({
      where: {
        userId,
      },
    });
    return address;
  };

  createAddress = async (userId: string, addressData: AddressData) => {
    const address = await prisma.address.create({
      data: { ...addressData, user: { connect: { id: userId } } },
    });
    return address;
  };

  updateAddress = async (userId: string, addressData: AddressData) => {
    const address = await prisma.address.update({
      where: {
        userId,
      },
      data: { ...addressData },
    });
    return address;
  };
}

export default AddressDB;
