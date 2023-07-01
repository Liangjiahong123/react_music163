import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
