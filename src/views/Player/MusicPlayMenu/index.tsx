import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
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
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks';
import { formatImgSize, getSongPlayUrl, formatTime } from '@/utils';
import { changeLyricIndexAction, changePlayModeAction } from '@/store/modules/player';
import Playlist from '../PlayerList';
import classNames from 'classnames';

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
  const [isShowList, setIsShowList] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  /** 获取state数据 */
  const { currentSong, currentLyric, lyricIndex, playMode } = useAppSelector(
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

  /** 副作用操作 */
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    setDuration(currentSong.dt);
  }, [currentSong]);

  const closePlaylist = useCallback(() => setIsShowList(false), []);

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
    findLyricIndex(currentTime);
  };

  /** 设置当前时间所匹配歌词的索引 */
  const findLyricIndex = (currentTime: number) => {
    let index = currentLyric.findIndex((lyric) => lyric.time > currentTime);
    if (lyricIndex === index - 1) return;
    if (index === -1) index = currentLyric.length - 1;
    dispatch(changeLyricIndexAction(index - 1));
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
  // 控制显示播放列表
  const handleTogglePlayList = () => setIsShowList(!isShowList);
  // 控制播放模式切换
  const handlePlayModeToggle = () => {
    let currentPlayMode = playMode + 1;
    currentPlayMode > 2 && (currentPlayMode = 0);
    dispatch(changePlayModeAction(currentPlayMode));
  };

  const songAvatar = currentSong.al?.picUrl
    ? formatImgSize(currentSong.al.picUrl, 34)
    : `${require('@img/default_album.jpg')}`;

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
              <i
                className={classNames('ctrl', {
                  loop: playMode === 0,
                  shuffle: playMode === 1,
                  oneloop: playMode === 2
                })}
                title={['列表循环', '随机播放', '单曲循环'][playMode]}
                onClick={handlePlayModeToggle}
              ></i>
              <div className='add' title='播放列表' onClick={handleTogglePlayList}>
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
      {isShowList && (
        <Playlist lyric={currentLyric} lyricIndex={lyricIndex} onClose={closePlaylist} />
      )}
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
