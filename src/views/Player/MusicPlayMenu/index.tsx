import React, { memo, useEffect, useRef, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import {
  MusicPlayMenuWrap,
  UpdownWrap,
  PlayBar,
  Control,
  MusicInfo,
  SongContent,
  Process,
  Operator
} from './style';
import { appShallowEqual, useAppSelector } from '@/hooks';
import { formatImgSize, getSongPlayUrl } from '@/utils';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  /** 组件内部数据 */
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  /** 获取state数据 */
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    appShallowEqual
  );

  /** 副作用操作 */
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
        console.log('播放成功');
      })
      .catch((err) => {
        setIsPlaying(false);
        console.log('播放失败', err);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  /** 音乐进度处理 */
  const handleTimeUpdate = () => {
    // 获取当前播放时间
    const currentTime = audioRef.current!.currentTime;
    // 计算当前歌曲进度
    const curProgress = ((currentTime * 1000) / duration) * 100;

    setProgress(curProgress);
  };

  /** 组件内部事件处理 */
  const handleSongCtrlClick = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          setIsPlaying(false);
          console.log('播放失败', err);
        });
    setIsPlaying(!isPlaying);
  };
  return (
    <MusicPlayMenuWrap>
      <div className='bar-container'>
        <PlayBar>
          <Control isPlaying={isPlaying}>
            <i className='prev'></i>
            <i className='play' onClick={handleSongCtrlClick}></i>
            <i className='next'></i>
          </Control>
          <MusicInfo>
            <div className='avatar'>
              <img src={formatImgSize(currentSong.al.picUrl, 34)} />
              <div className='mask'></div>
            </div>
            <div className='player'>
              <div className='info'>
                <SongContent>
                  <span className='name'>{currentSong.name}</span>
                  <div className='artists'>
                    <Link to={`/artist?id=123`}>{currentSong.ar[0].name}</Link>
                  </div>
                </SongContent>
                <Process>
                  <Slider value={progress} tooltip={{ open: false }} className='cur' />
                  <div className='buffer'></div>
                </Process>
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
            <i className='icon lock'></i>
          </div>
          <div className='right'></div>
        </UpdownWrap>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
