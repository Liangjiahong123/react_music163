import React, { memo, useState, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { PlayerControlWrap } from './style';
import { useAppDispatch } from '@/hooks';
import { toggleMusicAction, IPlayType } from '@/store/modules/player';

interface Iprops {
  children?: ReactNode;
  audio: HTMLAudioElement;
}

const PlayerControl: FC<Iprops> = (props) => {
  const { audio } = props;

  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const changePlayState = () => setIsPlaying(true);
    audio?.addEventListener('playing', changePlayState);

    return () => {
      audio?.removeEventListener('playing', changePlayState);
    };
  }, [audio]);

  const handleToggleSong = (type: IPlayType) => {
    dispatch(toggleMusicAction(type));
  };

  const handleSongCtrlClick = () => {
    isPlaying
      ? audio?.pause()
      : audio?.play().catch((err) => {
          setIsPlaying(false);
          console.log('播放失败', err);
        });
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerControlWrap isPlaying={isPlaying}>
      <i className='prev' onClick={() => handleToggleSong('prev')}></i>
      <i className='play' onClick={handleSongCtrlClick}></i>
      <i className='next' onClick={() => handleToggleSong('next')}></i>
    </PlayerControlWrap>
  );
};

export default memo(PlayerControl);
