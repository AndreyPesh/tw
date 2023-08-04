import axios from 'axios';
import { LIST_ROUTES, STATUS_CODE } from '@/src/5_shared/api/types/enums';

export const sendFile = async (formData: FormData) => {
  try {
    const response = await axios.post(LIST_ROUTES.AVATAR, formData, {
      headers: { 'Content-type': 'multipart/form-data' },
    });
    response.data.status === STATUS_CODE.OK ? true : false;
  } catch {
    return false;
  }
};
