import { create } from 'zustand';

export interface CardDataForm {
  numberCard: string;
  expiry: string;
  cvv: string;
}

interface CardDataState extends CardDataForm {
  addCardData: (cartData: Partial<CardDataForm>) => void;
  resetCardData: () => void;
}

const initStateData: CardDataForm = {
  numberCard: '____-____-____-____',
  expiry: '__ /__',
  cvv: '___',
};

const useCardStore = create<CardDataState>((set) => ({
  ...initStateData,
  addCardData: (cartData: Partial<CardDataForm>) =>
    set((state: CardDataState) => ({ ...state, ...cartData })),
  resetCardData: () =>
    set((state: CardDataState) => ({ ...state, ...initStateData })),
}));

export default useCardStore;
