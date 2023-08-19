import { NextResponse } from 'next/server';
import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';

const fetchBrandList = async () => {
  try {
    const brandList = await new PhoneDb().fetchListBrandPhone();
    return NextResponse.json({ status: STATUS_CODE.OK, brandList });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { fetchBrandList as GET };
