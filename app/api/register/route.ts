import { SignupFormData } from '@/src/5_shared/types/type';
import { validateSignupData } from '@/src/5_shared/utils/server/validate/validateFormData';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const data = (await req.json()) as SignupFormData;
  try {
    const listErrors = await validateSignupData(data);
    if(listErrors.length !== 0) {
      return NextResponse.json(listErrors);
    }
  } catch {}

  return NextResponse.json('success');
};
