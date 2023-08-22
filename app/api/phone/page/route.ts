import { NextRequest, NextResponse } from 'next/server';
import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { FIRST_PAGE_NUMBER, PER_PAGE } from '@/src/5_shared/types/constant';
import { LIST_QUERY_PARAMS_FILTER_PHONE } from '@/src/3_features/phones/filter/types/constants';
import { ListAppliedFilterOptions } from '@/src/3_features/phones/filter/types/types';

export const dynamic = 'force-dynamic';

const getPhonePage = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const currentPage = page ? Number(page) : FIRST_PAGE_NUMBER;

    const appliedFilterOptions: ListAppliedFilterOptions = {};

    LIST_QUERY_PARAMS_FILTER_PHONE.map((option) => {
      const optionValue = searchParams.get(option);
      if (optionValue) {
        appliedFilterOptions[option] = optionValue;
      }
    });

    const phones = await new PhoneDb().getPagePhones(
      currentPage,
      PER_PAGE,
      appliedFilterOptions
    );

    return NextResponse.json({
      status: STATUS_CODE.OK,
      data: { listPhone: phones },
    });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getPhonePage as GET };
