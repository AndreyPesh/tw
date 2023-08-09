import { FC } from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface ButtonIconProps {
  icon: IconType;
  iconProps: IconBaseProps;
  type?: 'button' | 'submit' | 'reset';
  handler?: () => void;
  disabled?: boolean;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  icon: Icon,
  iconProps,
  handler,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button onClick={handler} type={type} disabled={disabled}>
      <Icon
        {...iconProps}
        style={disabled ? { opacity: 0.5 } : { opacity: 1 }}
      />
    </button>
  );
};

export default ButtonIcon;
