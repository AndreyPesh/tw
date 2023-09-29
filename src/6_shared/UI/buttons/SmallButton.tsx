import { FC, PropsWithChildren, SyntheticEvent } from 'react';
import { EnumTypeButton } from '../../buttons/types/enums';
import classnames from 'classnames';

interface SmallButtonProps {
  variant: EnumTypeButton;
  type?: 'button' | 'submit' | 'reset';
  handler?: (event: SyntheticEvent) => void;
}

const SmallButton: FC<PropsWithChildren<SmallButtonProps>> = ({
  children,
  variant,
  type = 'button',
  handler,
}) => {
  return (
    <button
      type={type}
      onClick={handler}
      className={classnames(
        'p-1 mt-2  font-bold text-sm border  rounded-md active:scale-90 transition',
        { 'border-red text-red': variant === EnumTypeButton.DANGER }
      )}
    >
      {children}
    </button>
  );
};

export default SmallButton;
