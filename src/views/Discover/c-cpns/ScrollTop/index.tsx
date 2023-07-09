import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { ScrollTopWrap } from './style';

interface Iprops {
  children?: ReactNode;
}

const ScrollTop: FC<Iprops> = () => {
  return <ScrollTopWrap>ScrollTop</ScrollTopWrap>;
};

export default memo(ScrollTop);
