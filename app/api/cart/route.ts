import { NextRequest, NextResponse } from 'next/server';
import { CartData } from '@/src/3_features/cart/fetch/CartFetchApi';
import CartDb from '@/src/5_shared/api/helpers/db/cart/CartDb';

const getCartListRequest = async (request: NextRequest) => {
  const url = new URL(request.url);
  const idCart = url.searchParams.get('idCart');
  try {
    if (idCart) {
      const listCart = await new CartDb().getCartListById(idCart);
      return NextResponse.json(listCart);
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json('Cant get list cart');
  }
};

const addProductToCartRequest = async (request: NextRequest) => {
  const cartData: CartData = await request.json();
  try {
    const isProductInCart = await new CartDb().addProductToCart(cartData);
    return NextResponse.json(isProductInCart);
  } catch (error) {
    return NextResponse.json('Cant add product to cart');
  }
};

const removeProductFromCartRequest = async (request: NextRequest) => {
  const url = new URL(request.url);
  const idCart = url.searchParams.get('idCart');
  const idProduct = url.searchParams.get('idProduct');
  
  try {
    if (idCart && idProduct) {
      const isProductRemoveFromCart = await new CartDb().removeProductFromCart({
        idCart,
        idProduct,
      });
      return NextResponse.json(isProductRemoveFromCart);
    }
  } catch (error) {
    return NextResponse.json('Cant remove product from cart');
  }
};

export {
  addProductToCartRequest as POST,
  getCartListRequest as GET,
  removeProductFromCartRequest as DELETE,
};
