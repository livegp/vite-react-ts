import { Global } from '@emotion/react';
import { Suspense, lazy } from 'react';
import type { JSX } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '../../layouts/MainLayout.tsx';
import { ErrorFallback } from '../ErrorFallback/ErrorFallback.tsx';
import { Head } from '../Head/Head.tsx';
import { GlobalStyles } from './App.styled.ts';

const Home = lazy(() => import('../../pages/Home/Home.tsx'));
const ErrorNotFound = lazy(
  () => import('../../pages/ErrorNotFound/ErrorNotFound.tsx'),
);

//@ts-ignore
const ErrorTest = lazy(() => import('../../pages/ErrorTest/ErrorTest.tsx'));

export const App = (): JSX.Element => {
  return (
    <BrowserRouter basename='/vite-react-ts/'>
      <Global styles={GlobalStyles} />
      <Head />
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index={true} element={<Home />} />
              <Route path='error-test' element={<ErrorTest />} />
              <Route path='*' element={<ErrorNotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};
