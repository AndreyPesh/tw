import { NextRequest, NextResponse } from 'next/server';
import AddressDB from '@/src/5_shared/api/helpers/db/user/Address';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { CreateAddressData } from '@/src/3_features/userData/address/UI/form/types/interfaces';

const getUserAddress = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (userId) {
      const address = await new AddressDB().getAddress(userId);
      return NextResponse.json({ status: STATUS_CODE.OK, address });
    }
    throw new Error('User id is not exist');
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: 'Cant get address',
    });
  }
};

const createAddress = async (request: NextRequest) => {
  try {
    const { userId, addressData }: CreateAddressData = await request.json();
    const response = await new AddressDB().createAddress(userId, addressData);
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: 'Cant create address',
    });
  }
};

const updateAddress = async (request: NextRequest) => {
  try {
    const { userId, addressData }: CreateAddressData = await request.json();
    const response = await new AddressDB().updateAddress(userId, addressData);
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: 'Cant update address',
    });
  }
};

export { getUserAddress as GET, createAddress as POST, updateAddress as PATCH };
