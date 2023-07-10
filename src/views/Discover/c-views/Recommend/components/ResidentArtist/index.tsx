import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { ResidentArtistWrap, ArtistList, LinkWrap } from './style';
import { RESIDENT_ARTIST } from '@/assets/constants';
import TitleBaseWrap from '@cpns/TitleBaseView';
import ArtistItem from '../ArtistItem';

interface Iprops {
  children?: ReactNode;
}

const ResidentArtist: FC<Iprops> = () => {
  const rightSlot = (
    <Link to='/discover/artist/signed/' className='more'>
      查看全部 &gt;
    </Link>
  );

  return (
    <ResidentArtistWrap>
      <TitleBaseWrap className='mini-title' title='入驻歌手' rightSlot={rightSlot} />
      <ArtistList>
        {RESIDENT_ARTIST?.map((item) => (
          <ArtistItem key={item.id} artistItem={item} />
        ))}
      </ArtistList>

      <LinkWrap>
        <span>申请成为网易音乐人</span>
      </LinkWrap>
    </ResidentArtistWrap>
  );
};

export default memo(ResidentArtist);
