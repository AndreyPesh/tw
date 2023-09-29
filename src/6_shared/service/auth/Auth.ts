import axios from 'axios';
import { SignupFormData } from '../../types/type';
import { ResponseServer } from '../../utils/server/types/interface';

export const Auth = {
  async signup(data: SignupFormData) {
    try {
      const response = await axios.post<ResponseServer>('/api/register', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch {
      return null;
    }
  },
};
