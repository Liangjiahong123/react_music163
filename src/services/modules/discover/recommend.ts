import request from '../../request';

export const getBannersInfo = (params = {}) => {
  return request.get({ url: '/banner', params });
};

export const getHotRecommendInfo = (params = {}) => {
  return request.get({ url: '/personalized', params });
};

export const getNewAlbumInfo = (params = {}) => {
  return request.get({ url: '/album/newest', params });
};

export const getSongRankingInfo = (params: { id: number }) => {
  return request.get({ url: '/playlist/detail', params });
};
