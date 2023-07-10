export interface ILyric {
  time: number;
  content: string;
}

export const getSongPlayUrl = (id: number) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

const timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export const parseLyric = (lyricStr: string) => {
  const lyrics: ILyric[] = [];
  // 截取到每行歌词,过滤空项
  const lyricLines = lyricStr.split('\n').filter(Boolean);
  // 获取时间和对应文本
  for (const line of lyricLines) {
    // 执行正则 获取匹配结果
    const timeMatchs = timeReg.exec(line);
    // 没有匹配则跳过本次循环
    if (!timeMatchs) continue;
    // 获取时分秒
    const [min, sec, msec] = [Number(timeMatchs[1]), Number(timeMatchs[2]), Number(timeMatchs[3])];
    // 转换成毫秒
    const time = min * 60 * 1000 + sec * 1000 + (msec * 1000) / 10 ** String(msec).length;
    // 获取文本
    const content = line.replace(timeReg, '');
    lyrics.push({ time, content });
  }
  return lyrics;
};
