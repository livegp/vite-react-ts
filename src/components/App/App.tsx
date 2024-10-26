import { Global } from '@emotion/react';
import type React from 'react';
import { useState } from 'react';
import {
  img,
  sources,
} from '/src/assets/img/vite.png?w=100;300;500&as=picture';
import { Head } from '../Head/Head.js';
import { Icon } from '../Icon/Icon.tsx';
import { Picture } from '../Picture/Picture.tsx';
import {
  ButtonStyled,
  CardStyled,
  GlobalStyles,
  LinkStyled,
  TextStyled,
  TitleStyled,
} from './App.styled.ts';

export function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount(count => count + 1);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <Head />
      <div>
        <LinkStyled href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <Icon name='vite' primary={true} />
        </LinkStyled>
        <LinkStyled href='https://react.dev' target='_blank' rel='noreferrer'>
          <Icon name='react' animated={true} />
        </LinkStyled>
      </div>
      <TitleStyled>Vite + React + Bun</TitleStyled>
      <CardStyled>
        <ButtonStyled type='button' onClick={handleClick}>
          count is {count}
        </ButtonStyled>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </CardStyled>
      <TextStyled>Click on the Vite and React logos to learn more</TextStyled>
      <Picture img={img} sources={sources} />
    </>
  );
}
