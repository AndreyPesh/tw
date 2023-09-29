import { FilterPhoneQueryParams } from '@/src/4_features/phones/filter/types/interfaces';

export const isFilterApplied = (options: FilterPhoneQueryParams) => {
  const listOptions = Object.values(options);
  return listOptions.length > 0;
};
