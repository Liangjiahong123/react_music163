import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';

interface Iprops {
  children?: ReactNode;
}

const Discover: FC<Iprops> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default memo(Discover);
