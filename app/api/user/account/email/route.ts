import { NextRequest, NextResponse } from 'next/server';
import { UserDB } from '@/src/6_shared/api/helpers/db/user/User';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';

const updateEmail = async (req: NextRequest) => {
  try {
    const { email, newEmail }: { email: string; newEmail: string } =
      await req.json();
    const isEmailUpdated = await new UserDB().updateEmail(email, newEmail);

    if (isEmailUpdated) return NextResponse.json({ status: STATUS_CODE.OK });
    throw new Error('Cant update email');
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { updateEmail as PATCH };
