import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const Download: FC<Iprops> = () => {
  return <div>Download</div>;
};

export default memo(Download);
