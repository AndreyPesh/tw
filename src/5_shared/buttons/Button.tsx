import React, { FC, PropsWithChildren } from 'react';
import { EnumTypeButton } from './types/enums';
import classnames from 'classnames';
import Spinner from './spinner/Spinner';

interface ButtonProps {
  variant: EnumTypeButton;
  type?: 'button' | 'submit' | 'reset';
  handler?: () => void;
  isLoading?: boolean;
  styles?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  type = 'button',
  handler,
  isLoading,
  styles = '',
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
          'bg-transparent text-primary hover:border-primary':
            variant === EnumTypeButton.TRANSPARENT,
          'text-white': variant === EnumTypeButton.PRIMARY,
        },
        {
          'bg-transparent text-gray-600 hover:opacity-100 hover:shadow-none hover:text-black border-none':
            variant === EnumTypeButton.OUTLINE,
        },
        {
          'bg-transparent text-success border-success':
            variant === EnumTypeButton.SUCCESS,
        },
        { 'cursor-not-allowed hover:opacity-50 opacity-50': isLoading },
        { [styles]: styles }
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
