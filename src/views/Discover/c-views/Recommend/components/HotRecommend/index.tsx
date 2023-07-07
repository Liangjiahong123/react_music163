import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { HotRecommendWrap, HeaderLeft, SongList } from './style';
import { RECOMMEND_NAVS } from '@/assets/constants';
import TitleBaseView from '@cpns/TitleBaseView';
import SongItem from '@cpns/SongItem';
import { appShallowEqual, useAppSelector } from '@/hooks';

interface Iprops {
  children?: ReactNode;
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.discover.hotRecommends
    }),
    appShallowEqual
  );
  const leftSlot = (
    <HeaderLeft>
      {RECOMMEND_NAVS.map((item) => (
        <Link to={`/discover/playlist?cat=${item}`} key={item}>
          {item}
        </Link>
      ))}
    </HeaderLeft>
  );

  const RightSlot = (
    <div className='title-right'>
      <Link to='/discover/playlist' className='more'>
        更多
      </Link>
      <i className='icon'></i>
    </div>
  );

  return (
    <HotRecommendWrap>
      <TitleBaseView
        title='热门推荐'
        isLink
        toPath='/discover/playlist'
        showIcon
        leftSlot={leftSlot}
        RightSlot={RightSlot}
      />
      <SongList>
        {hotRecommends?.map((item) => (
          <SongItem songItem={item} key={item.id} />
        ))}
      </SongList>
    </HotRecommendWrap>
  );
};

export default memo(HotRecommend);
