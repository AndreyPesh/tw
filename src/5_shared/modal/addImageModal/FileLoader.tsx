import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';
import { useRef } from 'react';

const FileLoader = () => {
  const { closeModal } = useAddImageModalStore();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const inputHandler = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <div>
      <form>
        <div className="hidden">
          <input type="file" ref={inputFileRef} />
        </div>
        <div>
          <Button variant={EnumTypeButton.PRIMARY} handler={inputHandler}>
            Select image
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
