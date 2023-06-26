import axios from 'axios';
import { SignupFormData } from '../../types/type';

export const Auth = {
  async signup(data: SignupFormData) {
    try {
      const response = await axios.post('/api/register', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch {
      return null;
    }
  },
};
