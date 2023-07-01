import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const NotFound: FC<Iprops> = () => {
  return <div>NotFound</div>;
};

export default memo(NotFound);
