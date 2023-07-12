import React, { memo, useEffect, useRef } from 'react';
import type { ReactNode, FC } from 'react';
import { MusicPlayMenuWrap, UpdownWrap, PlayBar } from './style';
import { appShallowEqual, useAppSelector } from '@/hooks';
import { getSongPlayUrl, eventBus } from '@/utils';
import PlayerControl from './c-cpns/PlayerControl';
import MusicInfo from './c-cpns/MusicInfo';
import PlayOperator from './c-cpns/PlayOperator';

interface Iprops {
  children?: ReactNode;
}

const MusicPlayMenu: FC<Iprops> = () => {
  /** 组件内部数据 */
  const audioRef = useRef<HTMLAudioElement>(null);

  /** 获取state数据 */
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      currentLyric: state.player.currentLyric,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    appShallowEqual
  );

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

  // 歌曲重播
  const handleMusicRePlay = () => {
    audioRef.current!.currentTime = 0;
    audioRef.current?.play();
  };

  return (
    <MusicPlayMenuWrap>
      <div className='bar-container'>
        <PlayBar>
          <PlayerControl audio={audioRef.current as HTMLAudioElement} />
          <MusicInfo audio={audioRef.current as HTMLAudioElement} />
          <PlayOperator />
        </PlayBar>
        <UpdownWrap>
          <div className='left'>
            <i className='icon lock'></i>
          </div>
          <div className='right'></div>
        </UpdownWrap>
      </div>
      <audio ref={audioRef} />
    </MusicPlayMenuWrap>
  );
};

export default memo(MusicPlayMenu);
