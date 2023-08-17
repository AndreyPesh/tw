import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { FIRST_PAGE_NUMBER } from '@/src/5_shared/types/constant';
import { NextRequest, NextResponse } from 'next/server';

const getAllPhones = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const pageNumber = searchParams.get('page_number');
    const currentPagePageNumber = pageNumber
      ? Number(pageNumber)
      : FIRST_PAGE_NUMBER;

    const phones = await new PhoneDb().getAllPhones(currentPagePageNumber);

    return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getAllPhones as GET };
