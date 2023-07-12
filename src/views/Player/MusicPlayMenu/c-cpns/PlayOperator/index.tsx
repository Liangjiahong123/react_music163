import React, { memo, useState, useCallback } from 'react';
import type { ReactNode, FC } from 'react';
import { PlayOperWrap } from './style';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/hooks';
import { changePlayModeAction } from '@/store/modules/player';
import Playlist from '../PlayerList';

interface Iprops {
  children?: ReactNode;
}

const PlayerOperator: FC<Iprops> = () => {
  const [isShowList, setIsShowList] = useState(false);

  const { playMode } = useAppSelector(
    (state) => ({
      playMode: state.player.playMode
    }),
    appShallowEqual
  );

  const dispatch = useAppDispatch();

  // 关闭播放列表
  const closePlaylist = useCallback(() => setIsShowList(false), []);

  // 控制显示播放列表
  const handleTogglePlayList = () => setIsShowList(!isShowList);

  // 控制播放模式切换
  const handlePlayModeToggle = () => {
    let currentPlayMode = playMode + 1;
    currentPlayMode > 2 && (currentPlayMode = 0);
    dispatch(changePlayModeAction(currentPlayMode));
  };

  return (
    <PlayOperWrap playMode={playMode}>
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
      {isShowList && <Playlist onClose={closePlaylist} />}
    </PlayOperWrap>
  );
};

export default memo(PlayerOperator);
