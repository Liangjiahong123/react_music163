import request from '../request';

export const getCurrentSong = (params: { ids: string }) => {
  return request.get({ url: '/song/detail', params });
};
