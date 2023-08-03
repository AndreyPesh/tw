import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';
import { ChangeEvent, useRef, useState } from 'react';

const FileLoader = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const { closeModal } = useAddImageModalStore();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLImageElement>(null);

  const selectFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let filesList = event.target.files as FileList;
    if (filesList.length > 0) {
      const currentImageSrc = URL.createObjectURL(filesList[0]);
      setImageSrc(currentImageSrc);

      if (refImage.current) {
        refImage.current.onload = function handleLoad() {
          refImage.current && URL.revokeObjectURL(refImage.current.src);
        };
      }
    }
  };

  const deleteImageHandler = () => {
    setImageSrc('');
    // inputFileRef.current && inputFileRef.current;
  };

  const inputHandler = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
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
          <Button variant={EnumTypeButton.SUCCESS}>Save</Button>
          <Button variant={EnumTypeButton.TRANSPARENT} handler={closeModal}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FileLoader;
