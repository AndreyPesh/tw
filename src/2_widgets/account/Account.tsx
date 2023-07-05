'use client';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import Modal from '@/src/5_shared/modal/addImageModal/Modal';
import useAddImageModalStore from '@/src/5_shared/modal/addImageModal/state';
import Image from 'next/image';
import { FC } from 'react';

interface AccountProps {
  name: string | null;
  email: string | null;
  image: string | null;
}

const Account: FC<AccountProps> = ({ name, email, image }) => {
  const { openModal } = useAddImageModalStore();
  const imageUrl = (image && image) || './avatar.svg';

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
            <div className="py-5">
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
      <Modal />
    </>
  );
};

export default Account;