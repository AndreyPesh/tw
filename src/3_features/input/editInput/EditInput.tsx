import React, { ChangeEvent, FC, useState } from 'react';

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
  const [currentValue, setCurrentValue] = useState<string>(value);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  const onSubmitHandler = () => {
    submitHandler(currentValue);
  };

  return (
    <>
      <div className="flex">
        <label className="">{label}</label>
        <input
          name={name}
          type={type}
          value={currentValue}
          onChange={onChangeHandler}
        />
        <div>
          <button type="button" onClick={onSubmitHandler}>
            ok
          </button>
          <button type="button">del</button>
        </div>
      </div>
      {error.length > 0 && <p className="text-red">{error}</p>}
    </>
  );
};

export default EditInput;
