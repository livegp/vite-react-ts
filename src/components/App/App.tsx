import { Global } from '@emotion/react';
import { type FC, useState } from 'react';
import picture from '/src/assets/img/vite.png?w=100;300;500&as=picture';
import { Button } from '../Button/Button.tsx';
import { Head } from '../Head/Head.js';
import { Icon } from '../Icon/Icon.tsx';
import { Link } from '../Link/Link.tsx';
import { Picture } from '../Picture/Picture.tsx';
import {
  CardStyled,
  GlobalStyles,
  TextStyled,
  TitleStyled,
} from './App.styled.ts';

export const App: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount(prev => prev + 1);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <Head />
      <div>
        <Link href='https://vitejs.dev'>
          <Icon name='vite' primary={true} />
        </Link>
        <Link href='https://react.dev'>
          <Icon name='react' animated={true} />
        </Link>
        <Link href='https://typescriptlang.org/'>
          <Icon name='ts' />
        </Link>
      </div>
      <TitleStyled>Vite + React + TS</TitleStyled>
      <CardStyled>
        <Button label={`count is ${count}`} onClick={handleClick} />
      </CardStyled>
      <TextStyled>Click on logos to learn more</TextStyled>
      <Picture picture={picture} />
    </>
  );
};
