import { NextRequest, NextResponse } from 'next/server';
import { PhoneDb } from '@/src/6_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';
import { LIST_QUERY_PARAMS_FILTER_PHONE } from '@/src/4_features/phones/filter/types/constants';
import { ListAppliedFilterOptions } from '@/src/4_features/phones/filter/types/types';

export const dynamic = 'force-dynamic';

const getCountListPhone = async (req: NextRequest) => {
  try {
    const searchParams = new URL(req.url).searchParams;

    const appliedFilterOptions: ListAppliedFilterOptions = {};

    LIST_QUERY_PARAMS_FILTER_PHONE.map((option) => {
      const optionValue = searchParams.get(option);
      if (optionValue) {
        appliedFilterOptions[option] = optionValue;
      }
    });

    const count = await new PhoneDb().getCountListPhones(appliedFilterOptions);

    return NextResponse.json({ status: STATUS_CODE.OK, data: count });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getCountListPhone as GET };
