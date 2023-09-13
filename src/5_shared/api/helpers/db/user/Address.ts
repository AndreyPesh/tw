import prisma from '@/global.d';

class AddressDB {
  getAddress = async (userId: string) => {   
    const address = await prisma.address.findUnique({
      where: {
        userId,
      },
    });
    return address;
  };
}

export default AddressDB;
