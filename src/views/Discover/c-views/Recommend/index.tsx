import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { RecommendWrap } from './style';
import { useAppDispatch } from '@/hooks';
import { fetchDiscoverData } from '@/store/modules/discover';
import NavBanners from './components/NavBanners';
import HotRecommendWrap from './components/HotRecommend';

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverData());
  }, []);

  return (
    <RecommendWrap>
      <NavBanners />
      <div className='recommend-content'>
        <div className='left'>
          <HotRecommendWrap />
        </div>
        <div className='right'></div>
      </div>
    </RecommendWrap>
  );
};

export default memo(Recommend);
