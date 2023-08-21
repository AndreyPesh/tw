import { create } from 'zustand';

export interface PhoneFilterState {
  isFilterApplied: boolean;
  currentQueryParamsFilter: string;
  applyPhoneFilter: (queryParamsFilterPhone: string) => void;
  resetPhoneFilter: () => void;
}

const usePhoneFilterState = create<PhoneFilterState>((set) => ({
  isFilterApplied: false,
  currentQueryParamsFilter: '',
  applyPhoneFilter: (queryParamsFilterPhone: string) =>
    set(() => ({
      isFilterApplied: true,
      currentQueryParamsFilter: queryParamsFilterPhone,
    })),
  resetPhoneFilter: () =>
    set(() => ({ isFilterApplied: false, currentQueryParamsFilter: '' })),
}));

export default usePhoneFilterState;
