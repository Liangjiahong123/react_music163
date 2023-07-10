import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { PlayListWrap, ListHeader, ListBody } from './style';

interface Iprops {
  children?: ReactNode;
}

const PlayList: FC<Iprops> = () => {
  return (
    <PlayListWrap>
      <ListHeader>
        <h4>播放列表(0)</h4>
        <div className='oper'>
          <p className='collect'>
            <i className='icon'></i>
            <span className='text'>收藏全部</span>
          </p>
          <span className='line'></span>
          <p className='clear'>
            <i className='icon'></i>
            <span className='text'>清除</span>
          </p>
        </div>
        <p className='song-name'>笼</p>
        <i className='icon-close'></i>
      </ListHeader>
      <ListBody></ListBody>
    </PlayListWrap>
  );
};

export default memo(PlayList);
