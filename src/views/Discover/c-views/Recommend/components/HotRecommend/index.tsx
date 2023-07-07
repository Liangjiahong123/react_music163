import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { HotRecommendWrap } from './style';

interface Iprops {
  children?: ReactNode;
}

const HotRecommend: FC<Iprops> = () => {
  return (
    <HotRecommendWrap>
      <div className='header'></div>
    </HotRecommendWrap>
  );
};

export default memo(HotRecommend);
