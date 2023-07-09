import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { RankingItemWrap, TopCover, TopInfo, BottomItem } from './style';

interface Iprops {
  children?: ReactNode;
  rankingItem: Record<string, any>;
}

const RankingItem: FC<Iprops> = (props) => {
  const { rankingItem } = props;
  return (
    <RankingItemWrap>
      <div className='top'>
        <TopCover>
          <img src={rankingItem.coverImgUrl} />
          <Link to={`/discover/ranking?id=${rankingItem.id}`}>
            <div className='mask'></div>
          </Link>
        </TopCover>
        <TopInfo>
          <Link to={`/discover/playlist?id=${rankingItem.id}`} className='name'>
            {rankingItem.name}
          </Link>
          <div className='btn-icon'>
            <i className='icon play'></i>
            <i className='icon collect'></i>
          </div>
        </TopInfo>
      </div>
      <div className='bottom'>
        {rankingItem.tracks.slice(0, 10).map((item: any, i: number) => (
          <BottomItem key={item.id}>
            <span className={classNames('order', { top3: [0, 1, 2].includes(i) })}>{i + 1}</span>
            <Link to={`/song?id=${item.id}`} className='name'>
              {item.name}
            </Link>
            <div className='opr'>
              <i className='icon play' title='播放'></i>
              <i className='icon add' title='添加到收藏列表'></i>
              <i className='icon collect' title='收藏'></i>
            </div>
          </BottomItem>
        ))}
      </div>
      <div className='look-more'>
        <Link to={`/discover/ranking?id=${rankingItem.id}`}>查看全部&gt;</Link>
      </div>
    </RankingItemWrap>
  );
};

export default memo(RankingItem);
