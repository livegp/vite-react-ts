import type { FC } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: FC<ButtonProps> = ({ onClick, label }) => (
  <ButtonStyled type='button' onClick={onClick}>
    {label}
  </ButtonStyled>
);
