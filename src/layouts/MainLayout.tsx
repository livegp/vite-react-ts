import type { FC } from 'react';
import { Outlet } from 'react-router';

export const MainLayout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
