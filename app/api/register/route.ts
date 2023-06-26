import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/global.d';
import bcrypt from 'bcrypt';
import { SignupFormData } from '@/src/5_shared/types/type';
import { validateSignupData } from '@/src/5_shared/utils/server/validate/validateFormData';
import { ResponseServer } from '@/src/5_shared/utils/server/types/interface';
import { ResponseStatus } from '@/src/5_shared/utils/server/types/enum';

export const POST = async (req: NextRequest): Promise<ResponseServer> => {
  const data = (await req.json()) as SignupFormData;
  try {
    const listErrors = await validateSignupData(data);
    if (listErrors.length !== 0) {
      return NextResponse.json({
        status: ResponseStatus.BAD_REQUEST,
        message: listErrors.pop(),
      });
    }

    const isUserExist = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (isUserExist) {
      return NextResponse.json({
        status: ResponseStatus.BAD_REQUEST,
        message: 'User already exist',
      });
    }

    const { name, email, password } = data;
    const hashPassword = await bcrypt.hash(password, 5);

    await prisma.user.create({
      data: { name, email, password: hashPassword },
    });

    return NextResponse.json({
      status: ResponseStatus.OK,
      data: { user: { name, email } },
    });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({
      status: ResponseStatus.INTERNAL,
      message: 'Something went wrong',
    });
  }
};
