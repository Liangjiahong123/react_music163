import dayjs from 'dayjs';

export const formatPlayCount = (count: number) => {
  if (count < 10 ** 5) return count;
  if (count > 10 ** 5 && count < 10 ** 8) return Math.floor(count / 10 ** 4) + '万';
  return Math.floor(count / 10 ** 8) + '亿';
};

export const formatImgSize = (url: string, w: number, h = w) => {
  return `${url}?param=${w}y${h} `;
};

export const formatArtist = (list: any[], key: string, connector: string) => {
  const str = list?.map((item) => item[key])?.join(connector);
  return str;
};

type ITime = Exclude<Parameters<typeof dayjs>[0], null | undefined>;
export const formatTime = (time: ITime, type = 'YYYY-MM-DD') => {
  const m = dayjs(time);
  return m.isValid() ? m.format(type) : +time;
};
