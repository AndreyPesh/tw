import { UserDB } from '@/src/5_shared/api/helpers/db/user/User';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { NextRequest, NextResponse } from 'next/server';

const updateName = async (req: NextRequest) => {
  try {
    const { email, name }: { email: string; name: string } = await req.json();
    const isNameUpdated = await new UserDB().updateName(email, name);
    if (isNameUpdated) return NextResponse.json({ status: STATUS_CODE.OK });
    throw new Error('Cant update name');
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { updateName as PATCH };
