import { FC } from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface ButtonIconProps {
  icon: IconType;
  iconProps: IconBaseProps;
  type?: 'button' | 'submit' | 'reset';
  handler?: () => void;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  icon: Icon,
  iconProps,
  handler,
  type = 'button',
}) => {
  return (
    <button onClick={handler} type={type}>
      <Icon {...iconProps} />
    </button>
  );
};

export default ButtonIcon;
