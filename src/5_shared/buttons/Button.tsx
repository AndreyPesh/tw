import React, { FC, PropsWithChildren, SyntheticEvent } from 'react';
import { EnumTypeButton } from './types/enums';
import classnames from 'classnames';
import Spinner from './spinner/Spinner';

interface ButtonProps {
  variant: EnumTypeButton;
  type?: 'button' | 'submit' | 'reset';
  handler?: (event: SyntheticEvent) => void;
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
        'px-5 py-3 min-w-[140px] bg-primary font-semibold text-sm rounded-md hover:shadow-md hover:opacity-90 border active:scale-90 transition-all',
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
          'bg-success text-white border-success':
            variant === EnumTypeButton.SUCCESS,
        },
        { 'cursor-not-allowed opacity-50 disabled:opacity-50': isLoading },
        {
          'bg-transparent text-red border-red':
            variant === EnumTypeButton.DANGER,
        },
        {
          'bg-herbal text-white':
            variant === EnumTypeButton.APPLY,
        },
        { [styles]: styles }
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
