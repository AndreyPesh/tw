import { NextRequest, NextResponse } from 'next/server';
import OrderDb from '@/src/6_shared/api/helpers/db/order/OrderDb';

const createOrder = async (request: NextRequest) => {
  const orderData = await request.json();
  try {
    const isOrderApplied = await OrderDb.addOrder(orderData);
    return NextResponse.json({ isOrderApplied });
  } catch (error) {
    throw new Error('Cant create order');
  }
};

export { createOrder as POST };
