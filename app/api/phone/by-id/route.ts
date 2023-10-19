import { NextRequest, NextResponse } from 'next/server';
import { ProductDb } from '@/src/6_shared/api/helpers/db/phone/ProductDb';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';

const getPhoneById = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  try {
    if (id) {
      const phones = await new ProductDb().fetchProductById(id);
      return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
    }
    throw new Error('Invalid request ID');
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getPhoneById as GET };
