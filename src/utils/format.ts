export const formatPlayCount = (count: number) => {
  return Number(count / 10000).toFixed(0) + '万';
};
