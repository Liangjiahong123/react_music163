import React, { memo } from 'react';
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import HeaderView from '@cpns/HeaderView';
import FooterView from '@cpns/FooterView';

const App: FC = () => {
  return (
    <div className='app-container'>
      <HeaderView />
      <React.Suspense fallback=''>
        <div className='content'>{useRoutes(routes)}</div>
      </React.Suspense>
      <FooterView />
    </div>
  );
};

export default memo(App);
