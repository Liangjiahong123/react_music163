import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const Follow: FC<Iprops> = () => {
  return <div>Follow</div>;
};

export default memo(Follow);
