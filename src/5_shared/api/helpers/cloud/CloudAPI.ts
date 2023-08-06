import { CloudInstance, GeneralCloudAPI } from './types/interfaces';

class CloudAPI implements GeneralCloudAPI {
  private cloud: CloudInstance;
  constructor(cloud: CloudInstance) {
    this.cloud = cloud;
  }

  uploadImageToCloud = (formData: FormData) => {
    return this.cloud.uploadImage(formData);
  };

  removeImageFromCloud = async (urlImage: string) => {
    return await this.cloud.removeImage(urlImage);
  };
}

export default CloudAPI;
