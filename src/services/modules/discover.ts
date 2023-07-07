import request from '../request';

export const getBannersInfo = (params = {}) => {
  return request.get({ url: '/banner', params });
};

export const getHotRecommendInfo = (params = {}) => {
  return request.get({ url: '/banner', params });
};
