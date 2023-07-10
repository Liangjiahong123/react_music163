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
import { formatImgSize, getSongPlayUrl, formatTime } from '@/utils';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  /** 组件内部数据 */
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
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
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     setIsPlaying(true);
    //     console.log('播放成功');
    //   })
    //   .catch((err) => {
    //     setIsPlaying(false);
    //     console.log('播放失败', err);
    //   });
    setDuration(currentSong.dt);
  }, [currentSong]);

  /** 音乐进度处理 */
  const handleTimeUpdate = () => {
    // 获取当前播放时间(转换成秒)
    const currentTime = audioRef.current!.currentTime * 1000;
    // 计算当前歌曲进度
    const curProgress = (currentTime / duration) * 100;
    // 判断是否有在拖拽进度条
    if (!isDrag) {
      setCurTime(currentTime);
      setProgress(curProgress);
    }
  };

  /** 组件内部事件处理 */
  // 歌曲播放暂停
  const handleSongCtrlClick = () => {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          setIsPlaying(false);
          console.log('播放失败', err);
        });
    setIsPlaying(!isPlaying);
  };
  // 点击进度条更改进度
  const handleProcessClick = (value: number) => {
    // 计算当前点击位置的毫秒数
    const currentTime = (value / 100) * duration;
    // 设置audio的当前播放时间
    audioRef.current!.currentTime = currentTime / 1000;
    // 设置当前的播放时间
    setCurTime(currentTime);
    // 设置进度条
    setProgress(value);
    // 取消拖拽状态
    setIsDrag(false);
  };
  // 拖拽进度条更改进度
  const handleProcessDrag = (value: number) => {
    // 计算拖拽到某位置的播放时间
    const currentTime = (value / 100) * duration;
    // 设置当前的播放时间
    setCurTime(currentTime);
    // 标记拖拽状态
    setIsDrag(true);
    // 设置当前进度
    setProgress(value);
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
                  <Slider
                    value={progress}
                    step={0.5}
                    tooltip={{ open: false }}
                    onAfterChange={handleProcessClick}
                    onChange={handleProcessDrag}
                  />
                  <div className='buffer'></div>
                </Process>
              </div>
              <div className='time'>
                <span className='cur-time'>{formatTime(curTime, 'mm:ss')}</span>
                <span> / {formatTime(duration, 'mm:ss')}</span>
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
