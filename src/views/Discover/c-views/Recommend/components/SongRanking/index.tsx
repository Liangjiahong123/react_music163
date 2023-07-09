import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { SongRankingWrap, RankingList } from './style';
import { appShallowEqual, useAppSelector } from '@/hooks';
import TitleBaseView from '@/components/TitleBaseView';
import RankingItem from '../RankingItem';

interface Iprops {
  children?: ReactNode;
}

const SongChart: FC<Iprops> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    appShallowEqual
  );
  return (
    <SongRankingWrap>
      <TitleBaseView title='榜单' isLink toPath='/discover/toplist' showIcon />
      <RankingList>
        {rankings?.map((item) => (
          <RankingItem key={item.id} rankingItem={item} />
        ))}
      </RankingList>
    </SongRankingWrap>
  );
};

export default memo(SongChart);
