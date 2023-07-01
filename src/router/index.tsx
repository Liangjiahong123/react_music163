import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

const Discover = React.lazy(() => import('@/views/Discover'));
const Follow = React.lazy(() => import('@/views/Follow'));
const Mine = React.lazy(() => import('@/views/Mine'));
const Download = React.lazy(() => import('@/views/Download'));
const NotFound = React.lazy(() => import('@/views/NotFound'));
const Recommend = React.lazy(() => import('@/views/Discover/c-views/Recommend'));
const Ranking = React.lazy(() => import('@/views/Discover/c-views/Ranking'));
const Playlist = React.lazy(() => import('@/views/Discover/c-views/Playlist'));
const DjRadio = React.lazy(() => import('@/views/Discover/c-views/DjRadio'));
const Artist = React.lazy(() => import('@/views/Discover/c-views/Artist'));
const Album = React.lazy(() => import('@/views/Discover/c-views/Album'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <DjRadio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/follow',
    element: <Follow />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
