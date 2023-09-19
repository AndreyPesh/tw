import { NextRequest, NextResponse } from 'next/server';

const createOrder = async (request: NextRequest) => {
  console.log(await request.json());
  return NextResponse.json({});
};

export { createOrder as POST };
