import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';

const FileLoader = () => {
  const { closeModal } = useAddImageModalStore();
  return (
    <div>
      <h1>Load photo form</h1>
      <div>
        <Button variant={EnumTypeButton.SUCCESS}>Load</Button>
        <Button variant={EnumTypeButton.TRANSPARENT} handler={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default FileLoader;
