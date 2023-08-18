import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { NextResponse } from 'next/server';

const getCountListPhone = async () => {
  try {
    const count = await new PhoneDb().getCountListPhones();

    return NextResponse.json({ status: STATUS_CODE.OK, data: count });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getCountListPhone as GET };
