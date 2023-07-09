import React, { memo, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { MusicPlayMenuWrap, UpdownWrap, PlayBar, Control, MusicInfo, Operator } from './style';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuUpDown = () => {
    return;
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
              <img src={`${require('@img/default_album.jpg')}`} />
              <div className='mask'></div>
            </div>

            <div className='player'>
              <div className='info'>
                <div className='song'>
                  <span className='name'>C级浪漫</span>
                  <div className='artists'>
                    <Link to={`/artist?id=123`}>法老</Link>
                  </div>
                </div>

                <div className='process show'>
                  <div className='process cur'>
                    <span className='btn'>
                      <i className='loading'></i>
                    </span>
                  </div>
                  <div className='process buffer'></div>
                </div>
              </div>

              <div className='time'>
                <span className='cur-time'>00:00</span>
                <span>/ 00:00</span>
              </div>
            </div>
          </MusicInfo>

          <Operator>
            <div className='left'>
              <i className='oper pip' title='画中画歌词'></i>
              <i className='oper collect' title='收藏'></i>
              <i className='oper share' title='分享'></i>
            </div>

            <div className='right'>
              <i className='ctrl volume' title='音量'></i>
              <i className='ctrl loop' title='循环'></i>
              <div className='add' title='播放列表'>
                <div className='tip'>已添加到播放列表</div>
                <i className='list'>0</i>
              </div>
              <div className='tip'>循环</div>
            </div>
          </Operator>
        </PlayBar>

        <UpdownWrap>
          <div className='left'>
            <i className='icon lock' onMouseEnter={handleMenuUpDown}></i>
          </div>
          <div className='right'></div>
        </UpdownWrap>
      </div>
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
