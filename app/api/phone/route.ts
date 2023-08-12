import prisma from '@/global.d';
import { NextResponse } from 'next/server';

const addPhone = async () => {
  const category = await prisma.category.create({
    data: {
      name: `${(Math.random() * Math.random()) / Math.random()}_name`,
      slug: 'slug',
    },
  });

  return NextResponse.json(category);
};

export { addPhone as GET };
