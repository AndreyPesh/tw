import { create } from 'zustand';
import { OrderData, OrderState } from './types/interfaces';

const initStateData: OrderData = {
  productId: '',
  name: '',
  imageUrl: '',
  price: 0,
  quantity: 0,
};

const useOrderStore = create<OrderState>((set) => ({
  ...initStateData,
  setQuantity: (quantity: number) => set(() => ({quantity})),
  createOrder: (orderData: OrderData) => set(() => ({ ...orderData })),
  resetOrder: () => set(() => ({ ...initStateData })),
}));

export default useOrderStore;
