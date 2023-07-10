import request from '../request';

export const getCurrentSong = (params: { ids: number }) => {
  return request.get({ url: '/song/detail', params });
};

export const getSongLyric = (params: { id: number }) => {
  return request.get({ url: '/lyric', params });
};
