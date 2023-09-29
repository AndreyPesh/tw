import React, { ChangeEvent, FC, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import ButtonIcon from '@/src/6_shared/buttons/ButtonIcon';

interface EditInputProps {
  value: string;
  name: string;
  label: string;
  submitHandler: (data: string) => Promise<void>;
  error: string;
  type?: 'text' | 'email';
}

const EditInput: FC<EditInputProps> = ({
  value,
  label,
  name,
  type,
  submitHandler,
  error,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>(value);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  const onSubmitHandler = async () => {
    try {
      setIsLoading(true);
      await submitHandler(currentValue);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex items-center text-sm">
        <label className="min-w-[70px]">{label} :</label>
        <input
          name={name}
          type={type}
          value={currentValue}
          onChange={onChangeHandler}
          className="text-sm bg-gray-50 appearance-none border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-success"
        />
        <div className="absolute right-1">
          <ButtonIcon
            icon={IoMdCheckmark}
            iconProps={{ size: 20, color: '#0f766e' }}
            type={'button'}
            handler={onSubmitHandler}
            disabled={isLoading}
            styles="border border-success rounded focus:shadow"
          />
        </div>
      </div>
      {error.length > 0 && <p className="text-sm text-red text-center">{error}</p>}
    </>
  );
};

export default EditInput;
