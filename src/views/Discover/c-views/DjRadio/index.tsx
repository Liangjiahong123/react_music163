import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const DjRadio: FC<Iprops> = () => {
  return <div>DjRadio</div>;
};

export default memo(DjRadio);
