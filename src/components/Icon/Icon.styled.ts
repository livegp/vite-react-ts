import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface IconPropsType {
  primary?: boolean;
  animated?: boolean;
}

export const IconStyled = styled.svg<IconPropsType>`
  height: 6em;
  width: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: ${(props: IconPropsType): string => (props.primary ? 'drop-shadow(0 0 2em #61dafbaa)' : 'drop-shadow(0 0 2em #646cffaa)')};
  }

  ${(props: IconPropsType): ReturnType<typeof css> | null =>
    props.animated
      ? css`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${spin} infinite 20s linear;
          }
        `
      : null}
`;
