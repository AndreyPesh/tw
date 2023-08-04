import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import UploadFileButtons from './ui/UploadFileButtonsProps';
import { DEFAULT_NAME_AVATAR } from '../../types/constant';
import { sendFile } from './helpers/sendFile';
import { useSession } from 'next-auth/react';

const FileLoader = () => {
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_NAME_AVATAR);
  const [formData, setFormData] = useState<FormData>();

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
      createFormData(filesList[0]);
      revokeImageFromMemory();

      event.target.value = '';
    }
  };

  const revokeImageFromMemory = () => {
    if (refImage.current) {
      refImage.current.onload = function handleLoad() {
        refImage.current && URL.revokeObjectURL(refImage.current.src);
      };
    }
  };

  const createFormData = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ozmlbz2d');
    setFormData(formData);
  };

  const deleteFileHandler = () => {
    setImageSrc(DEFAULT_NAME_AVATAR);
  };

  const submitFileHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (formData) {
        const newImageUrl = await sendFile(formData);

        if (newImageUrl && session && session.user) {
          await update({
            ...session,
            user: {
              ...session?.user,
              image: newImageUrl,
            },
          });
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
          triggerInputHandler={triggerInputHandler}
          deleteFileHandler={deleteFileHandler}
        />
      </form>
    </div>
  );
};

export default FileLoader;
