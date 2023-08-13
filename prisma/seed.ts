// import prisma from '../global.d';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const phoneBrands = [
    'Samsung',
    'Apple',
    'Xiaomi',
    'Oppo',
    'Lenovo',
    'LG',
    'Sony',
    'Sharp',
    'Philips',
    'Poco',
  ];
  const brands = phoneBrands.map(async (brand) => {
    await prisma.phoneBrands.create({
      data: { brand },
    });
  });
  const resultBrands = await Promise.all(brands);
  console.log('Brands table data ', resultBrands);
  // await prisma.phoneBrands.create({
  //   data: { brand: 'Test' },
  // });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
