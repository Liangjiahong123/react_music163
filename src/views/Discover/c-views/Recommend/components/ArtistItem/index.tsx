import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { ArtistItemWrap } from './style';
import { formatImgSize } from '@/utils';

interface Iprops {
  children?: ReactNode;
  artistItem: Record<string, any>;
}

const ArtistItem: FC<Iprops> = (props) => {
  const { artistItem } = props;
  return (
    <ArtistItemWrap>
      <Link to={`/artist?id=${artistItem.id}`}>
        <img src={formatImgSize(artistItem.avatar, 62)} />
        <div className='info'>
          <h4 className='name'>{artistItem.name}</h4>
          <div className='desc'>{artistItem.desc}</div>
        </div>
      </Link>
    </ArtistItemWrap>
  );
};

export default memo(ArtistItem);
