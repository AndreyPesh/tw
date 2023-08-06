import { FC } from 'react';
import { BiDownload } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import useAddImageModalStore from '../state';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import ButtonIcon from '@/src/5_shared/buttons/ButtonIcon';

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
      <div className="py-5 w-80 flex justify-around">
        <ButtonIcon
          icon={BiDownload}
          iconProps={{ size: 35, color: '#437EF7' }}
          handler={triggerInputHandler}
        />

        <ButtonIcon
          icon={AiFillDelete}
          iconProps={{ size: 35, color: '#F04438' }}
          handler={deleteFileHandler}
        />
      </div>
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
