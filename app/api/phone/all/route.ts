import { NextResponse } from 'next/server';
import { PhoneDb } from '@/src/6_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/6_shared/api/types/enums';

const getAllPhones = async () => {
  try {
    const phones = await new PhoneDb().getAllPhones();

    return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getAllPhones as GET };
