import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { SongRankingWrap, RankingList } from './style';
import TitleBaseView from '@/components/TitleBaseView';
import { appShallowEqual, useAppSelector } from '@/hooks';
import classNames from 'classnames';
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
