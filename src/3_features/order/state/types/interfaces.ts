export interface OrderData {
  productId: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface OrderState extends OrderData {
  createOrder: (orderData: OrderData) => void;
  resetOrder: () => void;
}
