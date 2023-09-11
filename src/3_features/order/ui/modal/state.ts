import { create } from 'zustand';
import { ModalStateManagement } from '@/src/5_shared/modal/types/interface';

const useOrderModalStore = create<ModalStateManagement>((set) => ({
  isShow: false,
  openModal: () => set(() => ({ isShow: true })),
  closeModal: () => set(() => ({ isShow: false })),
}));

export default useOrderModalStore;
