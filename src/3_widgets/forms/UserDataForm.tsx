import React, { FC, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { userEmailSchema, userNameSchema } from './schemas/userDataValidate';
import EditInput from '@/src/4_features/input/editInput/EditInput';
import { UserAPI } from '@/src/6_shared/api/AccountAPI';
import { STATUS_CODE } from '@/src/6_shared/api/types/enums';

interface UserDataFormProps {
  name: string;
  email: string;
}

interface ErrorsList {
  name: string;
  email: string;
}

const UserDataForm: FC<UserDataFormProps> = ({ name, email }) => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [error, setError] = useState<ErrorsList>({
    name: '',
    email: '',
  });

  const onSubmitName = async (name: string) => {
    let validate = { name: '' };
    try {
      validate = await userNameSchema.validate({ name });
      setError((prev) => ({ ...prev, name: '' }));
    } catch (error) {
      setError((prev) => ({ ...prev, name: (error as Error).message }));
      return;
    }
    try {
      const status = await new UserAPI().updateName(email, name);

      if (status === STATUS_CODE.OK) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitEmail = async (data: string) => {
    let validate = { email: '' };
    try {
      validate = await userEmailSchema.validate({ email: data });
      setError((prev) => ({ ...prev, email: '' }));
    } catch (error) {
      setError((prev) => ({ ...prev, email: (error as Error).message }));
      return;
    }

    try {
      const status = await new UserAPI().updateEmail(email, validate.email);

      if (status === STATUS_CODE.OK && session && session.user) {
        await update({
          ...session,
          user: {
            ...session.user,
            email: validate.email,
          },
        });
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="p-2 mb-2 border rounded">
        <EditInput
          name="name"
          label="Name"
          value={name}
          submitHandler={onSubmitName}
          error={error.name}
        />
      </div>
      <div className="p-2 border rounded">
        <EditInput
          name="email"
          type="email"
          label="E-mail"
          value={email}
          error={error.email}
          submitHandler={onSubmitEmail}
        />
      </div>
    </form>
  );
};

export default UserDataForm;
