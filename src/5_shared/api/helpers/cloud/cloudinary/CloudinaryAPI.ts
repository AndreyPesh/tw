import axios from 'axios';
import { v2 as cloudinary } from 'cloudinary';
import { extractPublicId } from 'cloudinary-build-url';
import { CloudInstance } from '../types/interfaces';
import { PRESET_NAME_FIELD } from '../types/constants';

class CloudinaryAPI implements CloudInstance {
  private cloudAPI: typeof cloudinary;
  constructor() {
    this.cloudAPI = cloudinary;
    this.cloudAPI.config({
      cloud_url: 'https://api.cloudinary.com/v1_1',
      cloud_name: 'dc2l3gcuy',
      api_key: '583619465939329',
      api_secret: 'xEM0YrpXMFaYIRW8X_u-9koTlCU',
      upload_preset: 'ozmlbz2d',
      secure: true,
    });
  }

  uploadImage = async (formData: FormData) => {
    try {
      const { cloud_name, cloud_url, upload_preset } = this.cloudAPI.config();
      formData.append(PRESET_NAME_FIELD, upload_preset);

      let { status, data } = await axios.post<{ url: string }>(
        `${cloud_url}/${cloud_name}/image/upload`,
        formData
      );
      return { status, data: data.url };
    } catch (error) {
      throw new Error('Cant upload image');
    }
  };

  removeImage = async (urlImage: string) => {
    const publicId = extractPublicId(urlImage);
    try {
      const response = await cloudinary.uploader.destroy(publicId);
      if (response.result === 'ok' || response.result === 'not found') {
        return true;
      }
      return false;
    } catch {
      throw new Error('Cant remove image');
    }
  };
}

export default CloudinaryAPI;
