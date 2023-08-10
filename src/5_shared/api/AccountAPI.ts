import axios from 'axios';
import { LIST_ROUTES, STATUS_CODE } from './types/enums';

export class UserAPI {
  updateName = async (email: string, name: string) => {
    try {
      const { status } = await axios.patch(
        LIST_ROUTES.USERNAME,
        { email, name },
        { headers: { 'Content-type': 'application/json' } }
      );
      return status;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

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

  deleteAvatar = async () => {
    try {
      const { data } = await axios.delete<{ status: number }>(
        LIST_ROUTES.AVATAR
      );
      return data.status === STATUS_CODE.OK ? true : false;
    } catch {
      throw new Error('Cant remove file avatar');
    }
  };
}
