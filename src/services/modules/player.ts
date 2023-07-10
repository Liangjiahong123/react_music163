import request from '../request';

export const getSongUrl = (params: { id: number }) => {
  return request.get({ url: '/song/url', params });
};
