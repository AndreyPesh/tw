import { create } from 'zustand';
import { ModalStateManagement } from '../types/interface';

const useAddImageModalStore = create<ModalStateManagement>((set) => ({
  isShow: false,
  openModal: () => set(() => ({ isShow: true })),
  closeModal: () => set(() => ({ isShow: false })),
}));

export default useAddImageModalStore;
