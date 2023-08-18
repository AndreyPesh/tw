import { create } from 'zustand';

interface PaginationStore {
  currentPage: number;
  increasePage: () => void;
  decreasePage: () => void;
  setCurrentPage: (page: number) => void;
}

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 0,
  increasePage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  decreasePage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));

export default usePaginationStore;
