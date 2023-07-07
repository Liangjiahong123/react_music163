import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { HotRecommendWrap, HeaderLeft, HeaderRight, SongList } from './style';
import { RECOMMEND_NAVS } from '@/assets/constants';
import TitleBaseView from '@cpns/TitleBaseView';

interface Iprops {
  children?: ReactNode;
}

const HotRecommend: FC<Iprops> = () => {
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
    <HeaderRight>
      <Link to='/discover/playlist' className='more'>
        更多
      </Link>
      <i className='icon'></i>
    </HeaderRight>
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
      <SongList></SongList>
    </HotRecommendWrap>
  );
};

export default memo(HotRecommend);
