import { NextResponse } from 'next/server';
import { ProductDb } from '@/src/6_shared/api/helpers/db/phone/ProductDb';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';

const fetchBrandList = async () => {
  try {
    const brandList = await new ProductDb().fetchListBrandPhone();
    return NextResponse.json({ status: STATUS_CODE.OK, brandList });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { fetchBrandList as GET };
