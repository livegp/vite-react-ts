import type { FC, ReactNode } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <ButtonStyled type='button' onClick={onClick}>
    {children}
  </ButtonStyled>
);
