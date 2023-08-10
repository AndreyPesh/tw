import React, { ChangeEvent, FC, useState } from 'react';

interface EditInputProps {
  value: string;
  fieldName: string;
  type?: 'text';
}

const EditInput: FC<EditInputProps> = ({ value, fieldName, type }) => {
  const [currentText, setCurrentText] = useState<string>(value);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  return (
    <div className='flex'>
      <label className=''>{fieldName}</label>
      <input type={type} value={currentText} onChange={onChangeHandler} />
      <div>
        <button>ok</button>
        <button>del</button>
      </div>
    </div>
  );
};

export default EditInput;
