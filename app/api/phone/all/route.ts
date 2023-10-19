import { NextResponse } from 'next/server';
import { ProductDb } from '@/src/6_shared/api/helpers/db/phone/ProductDb';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';

const getAllPhones = async () => {
  try {
    const phones = await new ProductDb().getAllProducts();

    return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getAllPhones as GET };
