import request from '../request';

export const getBannersInfo = (params = {}) => {
  return request.get({ url: '/banner', params });
};
