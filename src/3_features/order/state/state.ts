import { create } from 'zustand';
import { OrderData, OrderState } from './types/interfaces';

const initStateData: OrderData = {
  idUser: '',
  idProduct: '',
  name: '',
  imageUrl: '',
  price: 0,
  quantity: 0,
  total: 0,
};

const useOrderModalStore = create<OrderState>((set) => ({
  ...initStateData,
  createOrder: (orderData: OrderData) => set(() => ({ ...orderData })),
  resetOrder: () => set(() => ({ ...initStateData })),
}));

export default useOrderModalStore;
