import { NextRequest, NextResponse } from 'next/server';
import AddressDB from '@/src/5_shared/api/helpers/db/user/Address';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';

const getUserAddress = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (userId) {
      const address = await new AddressDB().getAddress(userId);
      return NextResponse.json({ status: STATUS_CODE.OK, data: address });
    }
    throw new Error('User id is not exist');
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: 'Cant get address',
    });
  }
};

export { getUserAddress as GET };
