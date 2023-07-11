import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import type { ReactNode, FC } from 'react';
import { MusicPlayMenuWrap, UpdownWrap, PlayBar, Operator } from './style';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks';
import { getSongPlayUrl, eventBus } from '@/utils';
import { changePlayModeAction, toggleMusicAction, IPlayType } from '@/store/modules/player';
import Playlist from './c-cpns/PlayerList';
import PlayerControl from './c-cpns/PlayerControl';
import MusicInfo from './c-cpns/MusicInfo';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  /** 组件内部数据 */
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
    eventBus.on('replay', handleMusicRePlay);

    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    audioRef.current?.play().catch((err) => {
      console.log(err);
    });
    return () => {
      eventBus.off('replay', handleMusicRePlay);
    };
  }, [currentSong]);

  // 关闭播放列表
  const closePlaylist = useCallback(() => setIsShowList(false), []);

  /** 音乐进度处理 */
  // 监听歌曲是否播放完成
  const handleMusciEnded = () => {
    playMode === 2 ? handleMusicRePlay() : handleToggleSong('next');
  };
  // 歌曲重播
  const handleMusicRePlay = () => {
    audioRef.current!.currentTime = 0;
    audioRef.current?.play();
  };

  /** 组件内部事件处理 */
  // 控制显示播放列表
  const handleTogglePlayList = () => setIsShowList(!isShowList);
  // 控制播放模式切换
  const handlePlayModeToggle = () => {
    let currentPlayMode = playMode + 1;
    currentPlayMode > 2 && (currentPlayMode = 0);
    dispatch(changePlayModeAction(currentPlayMode));
  };
  // 控制歌曲切换
  const handleToggleSong = (type: IPlayType) => {
    dispatch(toggleMusicAction(type));
  };

  return (
    <MusicPlayMenuWrap>
      <div className='bar-container'>
        <PlayBar>
          <PlayerControl audio={audioRef.current as HTMLAudioElement} />
          <MusicInfo audio={audioRef.current as HTMLAudioElement} />

          <Operator playMode={playMode}>
            <div className='left'>
              <i className='oper pip' title='画中画歌词'></i>
              <i className='oper collect' title='收藏'></i>
              <i className='oper share' title='分享'></i>
            </div>
            <div className='right'>
              <i className='ctrl volume' title='音量'></i>
              <i
                className='ctrl playmode'
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
      <audio ref={audioRef} onEnded={handleMusciEnded} />
      {isShowList && (
        <Playlist lyric={currentLyric} lyricIndex={lyricIndex} onClose={closePlaylist} />
      )}
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
