import { useState } from 'react';
import type { JSX } from 'react';
import picture from '/src/assets/img/vite.png?w=100;300;500&as=picture';
import { Button } from '../../components/Button/Button.tsx';
import { Icon } from '../../components/Icon/Icon.tsx';
import { Link } from '../../components/Link/Link.tsx';
import { Picture } from '../../components/Picture/Picture.tsx';
import { CardStyled, TextStyled, TitleStyled } from './Home.styled.ts';

const Home = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount(prev => prev + 1);
  };

  return (
    <>
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

      <CardStyled>
        <TitleStyled>Vite + React</TitleStyled>
        <Button onClick={handleClick}>count is {count}</Button>
        <TextStyled>
          Edit <code>src/App.tsx</code> and save to test HMR
        </TextStyled>
      </CardStyled>
      <Picture picture={picture} />
    </>
  );
};

export default Home;
