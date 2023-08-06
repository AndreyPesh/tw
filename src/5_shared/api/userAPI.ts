import axios from 'axios';
import { LIST_ROUTES, STATUS_CODE } from './types/enums';

export class UserAPI {
  updateAvatar = async (formData: FormData) => {
    try {
      const { status, data: response } = await axios.post(
        LIST_ROUTES.AVATAR,
        formData,
        {
          headers: { 'Content-type': 'multipart/form-data' },
        }
      );
      if (status === STATUS_CODE.OK) {
        return response.data.usrImage as string;
      }
      return null;
    } catch {
      throw new Error();
    }
  };
}
