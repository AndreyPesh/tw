import { NextRequest, NextResponse } from 'next/server';
import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { FIRST_PAGE_NUMBER } from '@/src/5_shared/types/constant';

export const dynamic = 'force-dynamic';

const getPhonePage = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const currentPage = page ? Number(page) : FIRST_PAGE_NUMBER;

    const phones = await new PhoneDb().getPagePhones(currentPage, 4);

    return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getPhonePage as GET };
