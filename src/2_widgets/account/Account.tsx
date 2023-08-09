'use client';

import { User } from '@prisma/client';
import FileLoader from '@/src/5_shared/modal/addImageModal/ui/FileLoader';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';
import Modal from '@/src/5_shared/modal/common/Modal';
import Image from 'next/image';
import { FC } from 'react';
import { DEFAULT_NAME_AVATAR } from '@/src/5_shared/types/constant';
import DeleteButtonIcon from '@/src/5_shared/buttons/DeleteButtonIcon';

const Account: FC<Partial<User>> = ({ name, email, image }) => {
  const { openModal } = useAddImageModalStore();
  const imageUrl = (image && image) || DEFAULT_NAME_AVATAR;

  return (
    <>
      <section className="container">
        <div className="py-10 flex flex-col justify-between sm:flex-row sm:justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="avatar"
              width={200}
              height={200}
              src={imageUrl}
              className="w-[150px] h-[150px] rounded-full shadow-lg"
            />
            <div className="py-1 flex items-center justify-around flex-col h-[120px]">
              <DeleteButtonIcon disabled={imageUrl === DEFAULT_NAME_AVATAR} />
              <Button
                variant={EnumTypeButton.SUCCESS}
                handler={() => openModal()}
              >
                Change photo
              </Button>
            </div>
          </div>
          <div className="mt-10 py-10 border text-center">
            <p>{name}</p>
            <p>{email}</p>
            <p className="break-normal">{}</p>
          </div>
        </div>
      </section>
      <Modal children={<FileLoader />} management={useAddImageModalStore} />
    </>
  );
};

export default Account;
