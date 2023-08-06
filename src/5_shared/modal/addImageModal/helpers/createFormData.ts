import { Dispatch, SetStateAction } from 'react';
import { FILE_NAME_FIELD } from '@/src/5_shared/api/helpers/cloud/types/constants';

export const createFormData = (
  file: File,
  setFormData: Dispatch<SetStateAction<FormData>>
) => {
  const formData = new FormData();
  formData.append(FILE_NAME_FIELD, file);
  setFormData(formData);
};
