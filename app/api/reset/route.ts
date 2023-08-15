import prisma from '@/global.d';
import { NextResponse } from 'next/server';

const reset = async () => {
  try {
    await prisma.phoneImages.deleteMany()
    await prisma.phonesOnBrands.deleteMany()
    await prisma.phones.deleteMany()
    return NextResponse.json('Database was reset')
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: (error as Error).message,
    });
  }
};

export { reset as GET };
