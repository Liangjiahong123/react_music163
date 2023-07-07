import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { DisReleaseWrap, AlbumList } from './style';

import TitleBaseView from '@cpns/TitleBaseView';

interface Iprops {
  children?: ReactNode;
}

const DiscRelease: FC<Iprops> = () => {
  const RightSlot = (
    <div className='title-right'>
      <Link to='/discover/playlist' className='more'>
        更多
      </Link>
      <i className='icon'></i>
    </div>
  );
  return (
    <DisReleaseWrap>
      <TitleBaseView
        title='新碟上架'
        isLink
        toPath='/discover/album'
        showIcon
        RightSlot={RightSlot}
      />
      <AlbumList></AlbumList>
    </DisReleaseWrap>
  );
};

export default memo(DiscRelease);
