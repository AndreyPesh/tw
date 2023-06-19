import React, { FC, PropsWithChildren } from 'react';
import { EnumTypeButton } from './types/enums';
import classnames from 'classnames';
import Spinner from './spinner/Spinner';

interface ButtonProps {
  variant: EnumTypeButton;
  type?: 'button' | 'submit' | 'reset';
  handler?: () => void;
  isLoading?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  type = 'button',
  handler,
  isLoading,
  children,
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={handler}
      className={classnames(
        'px-5 py-3 bg-primary font-semibold text-sm rounded-md hover:shadow-md hover:opacity-90 border ',
        {
          'bg-transparent': variant === EnumTypeButton.TRANSPARENT,
          'text-primary': variant === EnumTypeButton.TRANSPARENT,
          'hover:border-primary': variant === EnumTypeButton.TRANSPARENT,
          'text-white': variant === EnumTypeButton.PRIMARY,
        },
        {
          'bg-transparent': variant === EnumTypeButton.OUTLINE,
          'text-gray-600': variant === EnumTypeButton.OUTLINE,
          'hover:opacity-100 hover:shadow-none':
            variant === EnumTypeButton.OUTLINE,
          'hover:text-black': variant === EnumTypeButton.OUTLINE,
          'border-none': variant === EnumTypeButton.OUTLINE,
        },
        { 'cursor-not-allowed hover:opacity-60 opacity-50': isLoading }
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
