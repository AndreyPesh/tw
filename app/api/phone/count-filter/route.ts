import { LIST_QUERY_PARAMS_FILTER_PHONE } from '@/src/3_features/phones/filter/types/constants';
import { FilterPhoneQueryParams } from '@/src/3_features/phones/filter/types/interfaces';
import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { FIRST_PAGE_NUMBER, PER_PAGE } from '@/src/5_shared/types/constant';
import { NextRequest, NextResponse } from 'next/server';

const getListPhoneWithFilter = async (req: NextRequest) => {
  try {
    const searchParams = new URL(req.url).searchParams;
    const page = searchParams.get('page');
    const currentPage = page ? Number(page) : FIRST_PAGE_NUMBER;

    const appliedFilterOptions: Partial<
      Record<keyof FilterPhoneQueryParams, string>
    > = {};

    LIST_QUERY_PARAMS_FILTER_PHONE.map((option) => {
      const optionValue = searchParams.get(option);
      if (optionValue) {
        appliedFilterOptions[option] = optionValue;
      }
    });
    const { listPhone, count } = await new PhoneDb().getListPhonesWithFilter(
      appliedFilterOptions,
      currentPage,
      PER_PAGE
    );

    return NextResponse.json({
      status: STATUS_CODE.OK,
      data: { listPhone, count },
    });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getListPhoneWithFilter as GET };
