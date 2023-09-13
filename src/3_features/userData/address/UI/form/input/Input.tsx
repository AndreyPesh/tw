import { FC } from 'react';
import classNames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: FieldError | undefined;
  defaultValue?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  register,
  error,
  type = 'text',
}) => {
  return (
    <div className="mt-2 flex items-center">
      <label htmlFor={'city'}>{label}:</label>
      <input
        // defaultValue={'city'}
        type={type}
        placeholder={placeholder}
        {...register}
        className={classNames(
          'ml-2 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary outline-none text-sm sm:leading-6',
          { 'focus:ring-red ring-red': error }
        )}
      />
    </div>
  );
};

export default Input;
