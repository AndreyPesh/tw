import React, { FC, useEffect, useState } from 'react';
import ButtonIcon from './ButtonIcon';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { UserAPI } from '../api/AccountAPI';

const DeleteButtonIcon: FC<{ disabled: boolean }> = ({ disabled }) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState<boolean>(disabled);

  useEffect(() => {
    setIsDisabled(disabled);
  }, [disabled]);

  const deleteFileHandler = async () => {
    try {
      setIsDisabled(true);
      const isImageRemoved = await new UserAPI().deleteAvatar();
      if (isImageRemoved) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ButtonIcon
      icon={AiFillDelete}
      iconProps={{ size: 35, color: '#F04438' }}
      handler={deleteFileHandler}
      disabled={isDisabled}
    />
  );
};

export default DeleteButtonIcon;
