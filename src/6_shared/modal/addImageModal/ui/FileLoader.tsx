import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import UploadFileButtons from './UploadFileButtonsProps';
import { ADD_FILE_TEMPLATE } from '../../../types/constant';
import useAddImageModalStore from '../state';
import { createFormData } from '../helpers/createFormData';
import { revokeImageFromMemory } from '../helpers/revokeImageFromMemory';
import UserAPI from '@/src/6_shared/api/user/UserAPI';

const FileLoader = () => {
  const router = useRouter();
  const { closeModal } = useAddImageModalStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string>(ADD_FILE_TEMPLATE);

  const [formData, setFormData] = useState<FormData>(new FormData());

  const inputFileRef = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLImageElement>(null);

  const triggerInputHandler = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const selectFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let filesList = event.target.files as FileList;
    if (filesList.length > 0) {
      const currentImageSrc = URL.createObjectURL(filesList[0]);
      setImageSrc(currentImageSrc);
      createFormData(filesList[0], setFormData);
      revokeImageFromMemory(refImage);

      event.target.value = '';
    }
  };

  const submitFileHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (imageSrc === ADD_FILE_TEMPLATE) return;
      setIsLoading(true);
      if (formData) {
        const newImageUrl = await UserAPI.updateAvatar(formData);
        if (newImageUrl) {
          router.refresh();
          closeModal();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setImageSrc(ADD_FILE_TEMPLATE);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitFileHandler} className="">
        <div className="m-auto max-w-md max-h-md w-60 h-60 rounded">
          <img
            ref={refImage}
            src={imageSrc}
            className="w-[100%] h-[100%] cursor-pointer"
            onClick={triggerInputHandler}
          />
        </div>
        <div className="hidden">
          <input type="file" ref={inputFileRef} onChange={selectFileHandler} />
        </div>
        <UploadFileButtons isLoading={isLoading} />
      </form>
    </div>
  );
};

export default FileLoader;
