import prisma from '@/global.d';
import { NextResponse } from 'next/server';

const getAllPhones = async () => {
  const phones = await prisma.phones.findMany({
    include: {
      images: true,
      brand: {
        include: {
          list: true,
        },
      },
    },
  });
  return NextResponse.json(phones);
};

export { getAllPhones as GET };
