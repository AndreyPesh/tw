// import prisma from '../global.d';

import { PrismaClient } from '@prisma/client';

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

const createBrands = async () => {
  const numberBrand = await prisma.phoneBrands.findMany();
  if (numberBrand.length >= phoneBrands.length) {
    return;
  }

  phoneBrands.map(async (name) => {
    await prisma.phoneBrands.create({
      data: { name },
    });
  });
};

const listUrlImages = [
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926271/cubot-p80-8-256gb-mystyc-violet-275852_a4qbai.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926271/iphone-13-pro-max-silver-both_1200x_zymvsf.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926260/s-l1600_odqwmo.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926260/xiaomi-redmi-10c-4gb-64gb-6.7-dual-sim-smartphone_baplue.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926255/oppo-a17-4gb-64gb-6.5-dual-sim-smartphone_jshhzg.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926254/MPVN3HN_A_1_onzqzv.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926253/PHONE1_vglwvv.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926232/6471689714_konpmp.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926221/51Mx4ECpncL_e5ic2c.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926214/44f1101a-de9f-434d-88e2-f9a9a63d962f-1000x1000_lifkhj.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926209/6a15d588-2152-4143-8248-d981d1819352-1000x1000_o4dkww.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926202/6a2fb08d-e687-4055-a424-d2e5d2338dbe_1200x_mksqak.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926196/1UIFTtkGOYHx5_xqjjak.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926189/1_ba46d50d-9781-4574-a4d2-6a02a00c7bf4_bh3pqi.webp',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691926182/0c5dd7da-64f4-4745-976a-55c332632a7e-1000x1000_yredfp.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691925740/DAjpB2_1681989646944_snalsi.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691925740/crOaWi_1681989633620_jkgnus.jpg',
  'https://res.cloudinary.com/dc2l3gcuy/image/upload/v1691925740/c5ZQOw_1681989633620_hpfjuj.jpg',
];

const createImages = async () => {
  const phones = await prisma.phones.findMany();
  const numberImages = await prisma.phoneImages.findMany();
  if (numberImages.length >= listUrlImages.length) {
    return;
  }

  phones.map(async (phone) => {
    for (let i = 0; i <= 5; i++) {
      const img = await prisma.phoneImages.create({
        data: {
          url: listUrlImages[getRandomNumberInt(0, listUrlImages.length - 1)],
          phone: {
            connect: { id: phone.id },
          },
        },
      });
    }
  });
};

const listModelPhones = [
  'Galaxy Z Fold 5 ',
  'Galaxy Z Flip 5 512GB Black 5G',
  'Galaxy S23 256GB Black 5G',
  'Galaxy S22 256GB Black 5G',
  'Charger 25W Black',
  'Galaxy S23 256GB Green 5G',
  'Spigen Ultra Hybrid Xiaomi 11T Pro',
  ' 11T Back Cover Transparent',
  'Redmi Note 11 128GB Gray',
  '11T Pro 256GB Gray 5G',
  'X5 Pro 256GB Yellow 5G',
  'Redmi Note 12 Pro+ 256GB Black 5G',
  'Redmi Note 11 Pro 128GB Blue',
];

const getRandomNumberInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function slugify(str: string) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

const createSmartphone = async () => {
  const brands = await prisma.phoneBrands.findMany();
  const numberPhones = await prisma.phones.findMany();
  if (numberPhones.length >= 20) {
    return;
  }

  for (let i = 0; i < 20; i++) {
    const model =
      listModelPhones[getRandomNumberInt(0, listModelPhones.length - 1)];

    const idBrand = brands[getRandomNumberInt(0, brands.length - 1)].id;

    const phone = await prisma.phones.create({
      data: {
        model,
        slug: slugify(model),
        price: getRandomNumberInt(100, 500),
        rating: Number((Math.random() * (5 - 0) + 0).toFixed(1)),
        quantity: getRandomNumberInt(3, 50),
        brand: {
          create: {
            brandId: idBrand,
          },
        },
      },
    });
  }
};

const prisma = new PrismaClient();

export const main = async () => {
  // await prisma.phoneImages.deleteMany();
  // await prisma.phonesOnBrands.deleteMany();
  // await prisma.phoneBrands.deleteMany()

  // console.log('Delete brands');

  // await prisma.phones.deleteMany();
  // console.log('Delete phones');

  await createBrands();
  // console.log('Create brands');

  await createSmartphone();
  // console.log('Create phones');

  await createImages();
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
