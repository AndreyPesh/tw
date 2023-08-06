import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import UploadFileButtons from './UploadFileButtonsProps';
import { ADD_FILE_TEMPLATE } from '../../../types/constant';
import useAddImageModalStore from '../state';
import { createFormData } from '../helpers/createFormData';
import { revokeImageFromMemory } from '../helpers/revokeImageFromMemory';
import { useUpdateSession } from '../hooks/useUpdateSession';
import { FileLoaderProps } from '../../types/interface';
import { UserAPI } from '@/src/5_shared/api/AccountAPI';

const FileLoader: FC<FileLoaderProps> = ({ initImageUrl }) => {
  const router = useRouter();
  const { closeModal } = useAddImageModalStore();
  const updateSessionWithNewImage = useUpdateSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const [imageSrc, setImageSrc] = useState<string>(
    initImageUrl ? initImageUrl : ADD_FILE_TEMPLATE
  );

  const [formData, setFormData] = useState<FormData>(new FormData());

  const inputFileRef = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLImageElement>(null);
  const userAPI = new UserAPI();

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

  const deleteFileHandler = async () => {
    try {
      setIsLoadingDelete(true);
      const isImageRemoved = await userAPI.deleteAvatar();
      if (isImageRemoved) {
        updateSessionWithNewImage(null);
        router.refresh();
      }
      closeModal();
      setImageSrc(ADD_FILE_TEMPLATE);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const submitFileHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (formData) {
        const newImageUrl = await userAPI.updateAvatar(formData);
        if (newImageUrl) {
          updateSessionWithNewImage(newImageUrl);
          router.refresh();
          closeModal();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitFileHandler}>
        <div className="w-[200px] h-[200px] border">
          <img ref={refImage} src={imageSrc} />
        </div>
        <div className="hidden">
          <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            onChange={selectFileHandler}
          />
        </div>
        <UploadFileButtons
          isLoading={isLoading}
          isLoadingDelete={isLoadingDelete}
          triggerInputHandler={triggerInputHandler}
          deleteFileHandler={deleteFileHandler}
        />
      </form>
    </div>
  );
};

export default FileLoader;
