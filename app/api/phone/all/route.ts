import { PhoneDb } from '@/src/5_shared/api/helpers/db/phone/PhoneDb';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { NextResponse } from 'next/server';

const getAllPhones = async () => {
  try {
    const phones = await new PhoneDb().getAllPhones();
    // console.log('PHPNES ', phones);
    
    return NextResponse.json({ status: STATUS_CODE.OK, data: phones });
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { getAllPhones as GET };

// {
//   id: '56276b2c-dfe3-493c-a35f-1515d583932c',
//   model: 'Charger 25W Black',
//   slug: 'charger-25w-black',
//   price: 357,
//   rating: 0.1,
//   quantity: 45,
//   images: [
//     [Object], [Object],
//     [Object], [Object],
//     [Object], [Object],
//     [Object], [Object],
//     [Object], [Object],
//     [Object], [Object]
//   ],
//   brand: [ [Object] ]
// }

// {
//   id: '9a905947-f14d-42c2-9247-f126a7220c00',
//   model: '11T Pro 256GB Gray 5G',
//   slug: '11t-pro-256gb-gray-5g',
//   price: 111,
//   rating: 0.3,
//   quantity: 39,
//   images: [],
//   brand: [Array]
// }