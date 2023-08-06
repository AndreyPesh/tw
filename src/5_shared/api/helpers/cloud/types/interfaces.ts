import { ResponseSuccess } from '../../../types/interfaces';

export interface GeneralCloudAPI {
  uploadImageToCloud: (formData: FormData) => Promise<ResponseSuccess>;
  removeImageFromCloud: (urlImage: string) => Promise<boolean>;
}

export interface CloudInstance {
  uploadImage: (formData: FormData) => Promise<ResponseSuccess>;
  removeImage: (urlImage: string) => Promise<boolean>;
}
