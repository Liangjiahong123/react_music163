import React, { memo, useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { MusicInfoWrap, SongContent, Process } from './style';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks';
import { formatImgSize, formatTime } from '@/utils';
import { changeLyricIndexAction, toggleMusicAction } from '@/store/modules/player';

interface Iprops {
  audio: HTMLAudioElement;
}

const MusicInfo: FC<Iprops> = (props) => {
  const { audio } = props;
  /** state数据 */
  const { currentSong, currentLyric, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentLyric: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    appShallowEqual
  );

  /** 组件内部数据 */
  const [progress, setProgress] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const dragRef = useRef(false);
  const lyricRef = useRef(lyricIndex);

  /** dispatch */
  const dispatch = useAppDispatch();

  useEffect(() => {
    audio && (audio.ontimeupdate = onAudioTimeUpdate);
    audio && (audio.onended = handleMusciEnded);

    return () => {
      audio && (audio.ontimeupdate = null);
      audio && (audio.onended = null);
    };
  }, [currentLyric]);

  // 实时更新歌曲时间和歌词
  const onAudioTimeUpdate = () => {
    // 获取当前播放时间(转换成毫秒)
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
  // 监听歌曲是否播放完成
  const handleMusciEnded = () => {
    if (playMode === 2) {
      audio.currentTime = 0;
      audio.play();
    } else {
      dispatch(toggleMusicAction('next'));
    }
  };
  // 查找当前播放的歌词
  const changeLyricIndex = (currentTime: number) => {
    let newIndex = currentLyric?.findIndex((lyric) => lyric.time > currentTime);
    if (lyricRef.current === newIndex - 1) return;
    lyricRef.current = newIndex - 1;
    if (newIndex === -1) newIndex = currentLyric.length - 1;
    dispatch(changeLyricIndexAction(newIndex - 1));
  };
  // 歌曲进度条点击
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
  // 歌曲进度条拖拽
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
