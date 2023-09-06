import { NextRequest, NextResponse } from 'next/server';

const addProductToCartRequest = async (request: NextRequest) => {
  const body = await request.json()
  console.log(body);
  return NextResponse.json('add to cart');
};

export { addProductToCartRequest as POST };
