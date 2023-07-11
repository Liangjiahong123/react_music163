import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './c-cpns/NavBar';
import ScrollTop from './c-cpns/ScrollTop';

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
      <ScrollTop />
    </div>
  );
};

export default memo(Discover);
