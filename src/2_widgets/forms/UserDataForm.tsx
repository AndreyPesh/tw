import React, { FC, useState } from 'react';
import EditInput from '@/src/3_features/input/editInput/EditInput';
import { userEmailSchema, userNameSchema } from './schemas/userDataValidate';

interface UserDataFormProps {
  name: string;
  email: string;
}

interface ErrorsList {
  name: string;
  email: string;
}

const UserDataForm: FC<UserDataFormProps> = ({ name, email }) => {
  const [error, setError] = useState<ErrorsList>({
    name: '',
    email: '',
  });

  const onSubmitName = async (data: string) => {
    let validate = { name: '' };
    try {
      validate = await userNameSchema.validate({ name: data });
      setError((prev) => ({ ...prev, name: '' }));
    } catch (error) {
      setError((prev) => ({ ...prev, name: (error as Error).message }));
      return;
    }
    console.log(`change name to ${validate.name}`);
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
    console.log(`change email ${validate.email}`);
  };

  return (
    <form>
      <EditInput
        name="name"
        label="Name"
        value={name}
        submitHandler={onSubmitName}
        error={error.name}
      />
      <EditInput
        name="email"
        type="email"
        label="E-mail"
        value={email}
        error={error.email}
        submitHandler={onSubmitEmail}
      />
    </form>
  );
};

export default UserDataForm;
