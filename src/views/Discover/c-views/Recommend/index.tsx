import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { RecommendWrap } from './style';
import { useAppDispatch } from '@/hooks';
import { fetchRecommendData } from '@/store/modules/discover/recommend';
import NavBanners from './components/NavBanners';
import HotRecommend from './components/HotRecommend';
import DiscRelease from './components/DiscRelease';
import SongRanking from './components/SongRanking';
import UserLogin from './components/UserLogin';
import ResidentArtist from './components/ResidentArtist';
import HotDjRadio from './components/HotDjRadio';

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRecommendData());
  }, []);

  return (
    <RecommendWrap>
      <NavBanners />
      <div className='recommend-content'>
        <div className='left'>
          <HotRecommend />
          <DiscRelease />
          <SongRanking />
        </div>
        <div className='right'>
          <UserLogin />
          <ResidentArtist />
          <HotDjRadio />
        </div>
      </div>
    </RecommendWrap>
  );
};

export default memo(Recommend);
