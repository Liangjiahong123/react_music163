import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { SongItemWrap, BottomWrap } from './style';
import { formatPlayCount } from '@/utils';

interface Iprops {
  children?: ReactNode;
  songItem: Record<string, any>;
}

const SongItem: FC<Iprops> = (props) => {
  const { songItem } = props;
  return (
    <SongItemWrap>
      <div className='cover'>
        <Link to={`/playlist?id=${songItem.id}`}>
          <img src={songItem.picUrl + '?param=140y140'} />
        </Link>
        <BottomWrap>
          <div className='bottom-left'>
            <i className='icon-headset'></i>
            <span className='count'>{formatPlayCount(songItem.playCount)}</span>
          </div>
          <i className='icon-play'></i>
        </BottomWrap>
      </div>
      <p className='dec'>
        <Link to={`/playlist?id=${songItem.id}`}>{songItem.name}</Link>
      </p>
    </SongItemWrap>
  );
};

export default memo(SongItem);
