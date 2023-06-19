import { FC, useRef } from 'react';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ name, type, label, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input name={name} type={type} placeholder={placeholder} className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary outline-none sm:text-sm sm:leading-6"/>
      </div>
    </div>
  );
};

export default Input;
