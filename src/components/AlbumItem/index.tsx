import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { AlbumItemWrap } from './style';
import { formatImgSize, formatArtist } from '@/utils';

interface Iprops {
  children?: ReactNode;
  albumItem: Record<string, any>;
}

const AlbumItem: FC<Iprops> = (props) => {
  const { albumItem } = props;
  return (
    <AlbumItemWrap>
      <div className='cover'>
        <img src={formatImgSize(albumItem.picUrl, 100)} />
        <div className='mask'></div>
        <i className='icon-play'></i>
      </div>
      <Link to={`/album?id=${albumItem.id}`}>
        <div className='desc'>{albumItem.name}</div>
      </Link>
      <Link to={`/artist?id=${albumItem.artist.id}`}>
        <div className='author'>{formatArtist(albumItem.artists, 'name', ' / ')}</div>
      </Link>
    </AlbumItemWrap>
  );
};

export default memo(AlbumItem);
