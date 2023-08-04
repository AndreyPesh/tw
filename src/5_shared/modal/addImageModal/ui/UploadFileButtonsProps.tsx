import { FC } from 'react';
import useAddImageModalStore from '../state';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';

interface UploadFileButtonsProps {
  isLoading: boolean;
  triggerInputHandler: () => void;
  deleteFileHandler: () => void;
}

const UploadFileButtons: FC<UploadFileButtonsProps> = ({
  isLoading,
  triggerInputHandler,
  deleteFileHandler,
}) => {
  const { closeModal } = useAddImageModalStore();
  return (
    <>
      <div>
        <Button variant={EnumTypeButton.PRIMARY} handler={triggerInputHandler}>
          Select image
        </Button>
        <Button variant={EnumTypeButton.DANGER} handler={deleteFileHandler}>
          Delete
        </Button>
      </div>
      <div className="pl-2 pr-2 inline-flex justify-center">
        <Button
          variant={EnumTypeButton.SUCCESS}
          type="submit"
          isLoading={isLoading}
        >
          Save
        </Button>
        <Button variant={EnumTypeButton.TRANSPARENT} handler={closeModal}>
          Cancel
        </Button>
      </div>
    </>
  );
};

export default UploadFileButtons;
