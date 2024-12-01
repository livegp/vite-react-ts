import { Global } from '@emotion/react';
import type { FC } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '../../layouts/MainLayout.tsx';
import { Head } from '../Head/Head.tsx';
import { GlobalStyles } from './App.styled.ts';

const HomePage = lazy(() => import('../../pages/index.tsx'));

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <Head />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index={true} element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
