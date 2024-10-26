import type React from 'react';
import { IconStyled } from './Icon.styled.ts';

interface IconPropsType {
  name: string;
  animated?: boolean;
  primary?: boolean;
}

export const Icon = ({
  name,
  animated,
  primary,
}: IconPropsType): React.JSX.Element => (
  <IconStyled
    animated={animated}
    primary={primary}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    aria-label={`Logo ${name}`}
  >
    <use xlinkHref={`spritemap.svg#${name}`} />
  </IconStyled>
);
