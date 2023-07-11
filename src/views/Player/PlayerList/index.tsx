import React, { memo, useEffect, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import { PlayListWrap, ListHeader, ListBody } from './style';
import { ILyric } from '@/utils';
import classNames from 'classnames';

interface Iprops {
  children?: ReactNode;
  lyric: ILyric[];
  lyricIndex: number;
}

const PlayList: FC<Iprops> = (props) => {
  const { lyric, lyricIndex } = props;

  /** 组件内部数据 */
  const containerRef = useRef<HTMLDivElement>(null);
  const rollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 获取容器高度和每句歌词高度
    const containerHeight = containerRef.current!.clientHeight;
    const lyricHeight = rollerRef.current!.children[0].clientHeight;
    // 最大偏移量
    const maxOffset = rollerRef.current!.clientHeight - containerHeight + 34;
    let offset = lyricHeight * lyricIndex + lyricHeight / 2 - containerHeight / 2;
    offset < 0 ? (offset = 0) : offset > maxOffset ? (offset = maxOffset) : '';
    console.log(offset);
    rollerRef.current!.style.transform = `translateY(${-offset}px)`;
  }, [lyricIndex]);

  /**设置歌词移动 */

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
      <ListBody>
        <div className='lyric-container' ref={containerRef}>
          <div className='lyric-roller' ref={rollerRef}>
            {lyric.map((item, i) => (
              <p key={item.time} className={classNames({ active: lyricIndex === i })}>
                {item.content}
              </p>
            ))}
          </div>
        </div>
      </ListBody>
    </PlayListWrap>
  );
};

export default memo(PlayList);
