import React, { memo, useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { MusicInfoWrap, SongContent, Process } from './style';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks';
import { formatImgSize, formatTime } from '@/utils';
import { changeLyricIndexAction } from '@/store/modules/player';

interface Iprops {
  audio: HTMLAudioElement;
}

const MusicInfo: FC<Iprops> = (props) => {
  const { audio } = props;
  /** 组件内部数据 */
  const [progress, setProgress] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const dragRef = useRef(false);

  const { currentSong, currentLyric, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentLyric: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    appShallowEqual
  );

  /** dispatch */
  const dispatch = useAppDispatch();

  useEffect(() => {
    audio?.addEventListener('timeupdate', onAudioTimeUpdate);
    return () => {
      audio?.removeEventListener('timeupdate', onAudioTimeUpdate);
    };
  }, [currentSong]);

  const onAudioTimeUpdate = () => {
    // 获取当前播放时间(转换成秒)
    const currentTime = audio.currentTime * 1000;
    // 计算当前歌曲进度
    const curProgress = (currentTime / currentSong.dt) * 100;

    if (!dragRef.current) {
      // 判断是否有在拖拽进度条
      setCurTime(currentTime);
      setProgress(curProgress);
    }
    changeLyricIndex(currentTime);
  };

  const changeLyricIndex = (currentTime: number) => {
    let index = currentLyric.findIndex((lyric) => lyric.time > currentTime);
    if (lyricIndex === index - 1) return;
    if (index === -1) index = currentLyric.length - 1;
    dispatch(changeLyricIndexAction(index - 1));
  };

  const handleProcessClick = (value: number) => {
    // 计算当前点击位置的毫秒数
    const currentTime = (value / 100) * currentSong.dt;
    // 设置audio的当前播放时间
    audio.currentTime = currentTime / 1000;
    // 设置当前的播放时间
    setCurTime(currentTime);
    // 设置进度条
    setProgress(value);
    // 取消拖拽状态
    dragRef.current = false;
  };

  const handleProcessDrag = (value: number) => {
    // 计算拖拽到某位置的播放时间
    const currentTime = (value / 100) * currentSong.dt;
    // 设置当前的播放时间
    setCurTime(currentTime);
    // 标记拖拽状态
    dragRef.current = true;
    // 设置当前进度
    setProgress(value);
  };

  const songAvatar = currentSong.al?.picUrl
    ? formatImgSize(currentSong.al?.picUrl, 34)
    : `${require('@img/default_album.jpg')}`;

  return (
    <MusicInfoWrap>
      <div className='avatar'>
        <img src={songAvatar} />
        <div className='mask'></div>
      </div>

      <div className='player'>
        <div className='info'>
          <SongContent>
            <Link to={`/song?id=${currentSong.id}`} className='name'>
              {currentSong.name}
            </Link>
            {currentSong.mv && <i className='mv'></i>}
            <div className='artists'>
              {currentSong.ar?.map((item: any) => (
                <Link to={`/artist?id=${item.id}`} key={item.id} className='author'>
                  {item.name}
                </Link>
              ))}
            </div>
            {currentSong.id && (
              <Link
                className='ranking-link'
                to={`/discover/toplist?id=3779629&_hash=songlist-${currentSong.id}`}
              />
            )}
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
          <span> / {currentSong.dt ? formatTime(currentSong.dt, 'mm:ss') : '00:00'}</span>
        </div>
      </div>
    </MusicInfoWrap>
  );
};

export default memo(MusicInfo);
