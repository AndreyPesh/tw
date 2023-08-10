import { UserDB } from '@/src/5_shared/api/helpers/db/user/User';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { NextRequest, NextResponse } from 'next/server';

export const updateEmail = async (req: NextRequest) => {
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
