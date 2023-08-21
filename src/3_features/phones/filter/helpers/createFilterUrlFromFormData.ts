import { FilterFormState } from '../types/interfaces';
import { EntriesObjectType } from '@/src/5_shared/types/type';

export const createFilterQueryParamsFromFormData = (data: FilterFormState) => {
  const listOptionsFilterArray = (
    Object.entries(data) as EntriesObjectType<typeof data>
  ).filter(([key, value]) => {
    if (value) {
      return `${key}=${value}`;
    }
  });
  const optionsUrl = listOptionsFilterArray.map(
    ([key, value]) => `${key}=${value}`
  );
  return '?' + optionsUrl.join('&')
};
