import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const FooterView: FC<Iprops> = () => {
  return <div>FooterView</div>;
};

export default memo(FooterView);
