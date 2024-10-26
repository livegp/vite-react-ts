import { Global } from '@emotion/react';
import type React from 'react';
import { useState } from 'react';
import { Head } from '../Head/Head.js';
import { Icon } from '../Icon/Icon.tsx';
// import { PictureStyled } from '../Picture/Picture.tsx';
import {
  Button,
  Card,
  GlobalStyles,
  StyledLink,
  Text,
  Title,
} from './App.styled.ts';
// import {
//   img,
//   sources,
// } from './src/assets/img/vite.png?as=picture&w=100;300;500';

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
        <StyledLink href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <Icon name='vite' primary={true} />
        </StyledLink>
        <StyledLink href='https://react.dev' target='_blank' rel='noreferrer'>
          <Icon name='react' animated={true} />
        </StyledLink>
      </div>
      <Title>Vite + React + Bun</Title>
      <Card>
        <Button type='button' onClick={handleClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>
      <Text>Click on the Vite and React logos to learn more</Text>
      {/* <PictureStyled img={img} sources={sources} /> */}
    </>
  );
}
