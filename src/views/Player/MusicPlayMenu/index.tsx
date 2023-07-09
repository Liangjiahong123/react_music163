import React, { memo, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import { MusicPlayMenuWrap, UpdownWrap, PlayBar, Control, MusicInfo, Operator } from './style';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuUpDown = () => {
    return;
    // menuRef.current && (menuRef.current.style.top = '-53px');
  };

  return (
    <MusicPlayMenuWrap>
      <div className='bar-container' ref={menuRef}>
        <PlayBar>
          <Control isPlaying={false}>
            <i className='prev'></i>
            <i className='play'></i>
            <i className='next'></i>
          </Control>
          <MusicInfo>
            <div className='avatar'>
              <img src='' />
              <div className='mask'></div>
            </div>

            <div className='player'>
              <div className='process show'>
                <div className='process cur'></div>
                <div className='process buffer'></div>
              </div>
              <div className='time'>
                <span className='cur-time'>00:00</span>
                <span>/ 00:00</span>
              </div>
            </div>
          </MusicInfo>
          <Operator></Operator>
        </PlayBar>

        <UpdownWrap>
          <div className='left'>
            <i className='icon-lock' onMouseEnter={handleMenuUpDown}></i>
          </div>
          <div className='right'></div>
        </UpdownWrap>
      </div>
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
