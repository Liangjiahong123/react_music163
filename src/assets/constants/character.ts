export const RESIDENT_ARTIST = [10559, 166009, 4941, 3682, 2124].map((id, i) => {
  const avatars = [
    'http://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg',
    'http://p1.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg',
    'http://p1.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg',
    'http://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg',
    'http://p1.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg'
  ];
  const descs = [
    '台湾歌手张惠妹',
    '《中国好声音》选手吴莫愁',
    '歌手孙楠   代表作《你快回来》《燃烧》',
    '歌手，音乐人。代表作《同桌的你》等。',
    '快乐男声总冠军，有娴熟的吉他技巧和天籁般的音色'
  ];
  return {
    avatar: avatars[i],
    desc: descs[i],
    name: ['张惠妹', '吴莫愁', '孙楠', '老狼', '陈楚生'][i],
    id
  };
});

export const HOT_DJRADIO = [47292577, 229341, 12027173, 1197168, 188565].map((id, i) => {
  const avatars = [
    'http://p1.music.126.net/IQ4Umz6XDvfKFx4M3m5c2Q==/109951165852735195.jpg',
    'http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg',
    'http://p2.music.126.net/3wdk-zlt0t06DZSqFvhkRw==/109951168702119532.jpg',
    'http://p1.music.126.net/rEScVYeOuUsJ0TcRF66VRA==/109951168675000345.jpg',
    'http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg'
  ];
  const descs = [
    '网易音乐人、歌手、作词、作曲"',
    '歌手、播客节目《维维道来》主理人',
    '男女双人全创作独立乐团',
    '网易音乐人、歌手、作词、作曲、编曲、制作人、乐手',
    '网易音乐人、歌手、作词、作曲、制作人'
  ];
  return {
    avatar: avatars[i],
    desc: descs[i],
    name: ['陈立', '刘维', '莫非定律乐团', '徐秉龙', '银临'][i],
    id
  };
});
