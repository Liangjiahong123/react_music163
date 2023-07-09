import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { ScrollTopWrap } from './style';
import { useScrollTop } from '@/hooks';

interface Iprops {
  children?: ReactNode;
}

const ScrollTop: FC<Iprops> = () => {
  const { showIcon, handleToScrollTop } = useScrollTop();

  return <ScrollTopWrap>{showIcon && <div onClick={handleToScrollTop}></div>}</ScrollTopWrap>;
};

export default memo(ScrollTop);
