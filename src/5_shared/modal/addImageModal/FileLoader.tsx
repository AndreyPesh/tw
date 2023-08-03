import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { DEFAULT_NAME_AVATAR } from '../../types/constant';
import axios from 'axios';

const FileLoader = () => {
  const [imageSrc, setImageSrc] = useState<string>(DEFAULT_NAME_AVATAR);
  const [formData, setFormData] = useState<FormData>();
  const { closeModal } = useAddImageModalStore();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLImageElement>(null);

  const selectFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let filesList = event.target.files as FileList;
    if (filesList.length > 0) {
      const currentImageSrc = URL.createObjectURL(filesList[0]);
      setImageSrc(currentImageSrc);
      const formData = new FormData();
      formData.append('file', filesList[0]);
      formData.append('upload_preset','ozmlbz2d');
      setFormData(formData);

      if (refImage.current) {
        refImage.current.onload = function handleLoad() {
          refImage.current && URL.revokeObjectURL(refImage.current.src);
        };
      }
      event.target.value = '';
    }
  };

  const deleteImageHandler = () => {
    setImageSrc(DEFAULT_NAME_AVATAR);
  };

  const inputHandler = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const submitPhotoHandler = async (event: FormEvent) => {
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
        <div>
          <Button variant={EnumTypeButton.PRIMARY} handler={inputHandler}>
            Select image
          </Button>
          <Button variant={EnumTypeButton.DANGER} handler={deleteImageHandler}>
            Delete
          </Button>
        </div>
        <div className="pl-2 pr-2 inline-flex justify-center">
          <Button variant={EnumTypeButton.SUCCESS} handler={submitPhotoHandler}>
            Save
          </Button>
          <Button variant={EnumTypeButton.TRANSPARENT} handler={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FileLoader;
