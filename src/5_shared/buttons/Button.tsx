import React, { FC, PropsWithChildren } from 'react';
import { EnumTypeButton } from './types/enums';
import classnames from 'classnames';

interface ButtonProps {
  type: EnumTypeButton;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ type, children }) => {
  return (
    <button
      className={classnames(
        'px-5 py-3 bg-primary font-semibold text-sm rounded-md hover:shadow-md',
        {
          'bg-transparent': type === EnumTypeButton.TRANSPARENT,
          'text-primary': type === EnumTypeButton.TRANSPARENT,
          'text-white': type === EnumTypeButton.PRIMARY,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
