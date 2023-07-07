import { create } from 'zustand';

interface ImageModalStore {
  isShow: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useAddImageModalStore = create<ImageModalStore>((set) => ({
  isShow: false,
  openModal: () => set(() => ({ isShow: true })),
  closeModal: () => set(() => ({ isShow: false })),
}));

export default useAddImageModalStore;
