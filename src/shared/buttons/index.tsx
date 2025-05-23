import { FC } from 'react';
import { ButtonProps } from './model';
import { ButtonSolid } from './ui/button-solid/ButtonSolid';
import { ButtonOutline } from './ui/button-outline/ButtonOutline';

export const Button: FC<ButtonProps> = ({ label, onPress, variant }) => {
  switch (variant) {
    case 'solid':
      return <ButtonSolid label={label} onPress={onPress} />;
    case 'outline':
      return <ButtonOutline label={label} onPress={onPress} />;
    default:
      return <ButtonOutline label={label} onPress={onPress} />;
  }
};
