import { FC } from 'react';
import useAddImageModalStore from '../state';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';

interface UploadFileButtonsProps {
  isLoading: boolean;
}

const UploadFileButtons: FC<UploadFileButtonsProps> = ({ isLoading }) => {
  const { closeModal } = useAddImageModalStore();
  return (
    <>
      <div className="py-5 w-80 flex justify-around"></div>
      <div className="py-5 w-80 flex justify-between">
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
