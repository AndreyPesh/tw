import axios from 'axios';
import {
  CLOUD_NAME,
  CLOUD_URL,
  GENERAL_MESSAGE_ERROR,
} from '../../types/constants';
import { ResponseError, ResponseSuccess } from '../../types/interfaces';

export const sendFileToCloud = async (
  formData: FormData
): Promise<ResponseSuccess | ResponseError> => {
  try {
    let { status, data } = await axios.post<{ url: string }>(
      `${CLOUD_URL}/${CLOUD_NAME}/image/upload`,
      formData
    );
    return { status, data: data.url };
  } catch (error) {
    let { status } = error as Response;
    return { status, message: GENERAL_MESSAGE_ERROR };
  }
};
