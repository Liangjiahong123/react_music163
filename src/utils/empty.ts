export const isNotEmpty = (value: any) => {
  if (value === undefined) return false;
  if (value === null) return false;
  if (value === '') return false;
  if (Number.isNaN(value)) return false;
  if (typeof value === 'object') return !!Object.keys(value).length;
  return true;
};
