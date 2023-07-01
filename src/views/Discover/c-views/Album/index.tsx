import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const Album: FC<Iprops> = () => {
  return <div>Album</div>;
};

export default memo(Album);
