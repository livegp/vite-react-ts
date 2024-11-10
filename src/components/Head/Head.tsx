import type { FC } from 'react';
import { Head as Helmet } from 'vite-react-ssg';
// import { Helmet } from 'react-helmet-async';

export const Head: FC = () => (
  <Helmet>
    <meta charSet='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='author' content='Oleksandr Pishta' />
    <meta name='description' content='Oleksandr Pishta, Full Stack Developer' />
    <link rel='canonical' href='http://localhost:3000/' />
  </Helmet>
);
