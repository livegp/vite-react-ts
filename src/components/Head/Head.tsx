import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';

export const Head: FC = () => {
  return (
    <Helmet>
      <html lang='en' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content='Oleksandr Pishta' />
      <meta name='description' content='The starting template of the project' />
      <title>Vite + React + Bun</title>
    </Helmet>
  );
};
