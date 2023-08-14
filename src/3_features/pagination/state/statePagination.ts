import { create } from 'zustand';
import { MIN_PAGE } from '../types/constants';

interface PaginationStore {
  currentPage: number;
  increasePage: () => void;
  decreasePage: () => void;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: MIN_PAGE,
  increasePage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  decreasePage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));

export default usePaginationStore;
