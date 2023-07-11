import React, { memo, useEffect } from 'react';
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import HeaderView from '@cpns/HeaderView';
import FooterView from '@cpns/FooterView';
import MusicPlayMenu from '@/views/Player/MusicPlayMenu';
import { useAppDispatch } from './hooks';
import { fetchCurSongInfoAction } from './store/modules/player';

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    dispatch(fetchCurSongInfoAction(2057534370));
  }, []);
  return (
    <div className='app-container'>
      <HeaderView />
      <React.Suspense fallback=''>
        <div className='content'>{useRoutes(routes)}</div>
      </React.Suspense>
      <FooterView />
      <MusicPlayMenu />
    </div>
  );
};

export default memo(App);
