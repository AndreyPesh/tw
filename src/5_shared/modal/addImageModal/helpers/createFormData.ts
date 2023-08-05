import { Dispatch, SetStateAction } from 'react';

export const createFormData = (
  file: File,
  setFormData: Dispatch<SetStateAction<FormData>>
) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ozmlbz2d');
  setFormData(formData);
};
