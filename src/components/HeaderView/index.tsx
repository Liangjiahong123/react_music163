import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const HeaderView: FC<Iprops> = () => {
  return <div>HeaderView</div>;
};

export default memo(HeaderView);
