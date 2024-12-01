import type { FC } from 'react';
import { useState } from 'react';
import picture from '/src/assets/img/vite.png?w=100;300;500&as=picture';
import {
  CardStyled,
  TextStyled,
  TitleStyled,
} from '../components/App/App.styled';
import { Button } from '../components/Button/Button.tsx';
import { Icon } from '../components/Icon/Icon.tsx';
import { Link } from '../components/Link/Link.tsx';
import { Picture } from '../components/Picture/Picture.tsx';

export const HomePage: FC = () => {
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
      <TitleStyled>Vite + React + TS</TitleStyled>
      <CardStyled>
        <Button label={`count is ${count}`} onClick={handleClick} />
      </CardStyled>
      <TextStyled>Click on logos to learn more</TextStyled>
      <Picture picture={picture} />
    </>
  );
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default HomePage;
