import axios from 'axios';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import UploadFileButtons from './ui/UploadFileButtonsProps';
import { DEFAULT_NAME_AVATAR } from '../../types/constant';

const FileLoader = () => {
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
      const formData = new FormData();
      formData.append('file', filesList[0]);
      formData.append('upload_preset', 'ozmlbz2d');
      setFormData(formData);

      if (refImage.current) {
        refImage.current.onload = function handleLoad() {
          refImage.current && URL.revokeObjectURL(refImage.current.src);
        };
      }
      event.target.value = '';
    }
  };

  const deleteFileHandler = () => {
    setImageSrc(DEFAULT_NAME_AVATAR);
  };

  const submitFileHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dc2l3gcuy/image/upload',
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
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
          triggerInputHandler={triggerInputHandler}
          deleteFileHandler={deleteFileHandler}
          submitFileHandler={submitFileHandler}
        />
      </form>
    </div>
  );
};

export default FileLoader;
