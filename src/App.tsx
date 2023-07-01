import React, { memo } from 'react';
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';

const App: FC = () => {
  return (
    <div>
      <div className='info'>{useRoutes(routes)}</div>
    </div>
  );
};

export default memo(App);
