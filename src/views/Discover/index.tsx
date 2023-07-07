import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './c-cpns/navBar';

interface Iprops {
  children?: ReactNode;
}

const Discover: FC<Iprops> = () => {
  return (
    <div className='discover-container'>
      <NavBar />
      <React.Suspense fallback=''>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default memo(Discover);
