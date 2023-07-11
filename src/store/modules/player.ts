import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentSong, getSongLyric } from '@/services';
import { parseLyric, ILyric, ramdonNumber } from '@/utils';
import type { RootState } from '@/store';

interface IPlayState {
  currentSong: Record<string, any>;
  currentLyric: ILyric[];
  lyricIndex: number;
  playSongList: any[];
  playSongIndex: number;
  playMode: number;
}

interface IThunkState {
  state: RootState;
}

export type IPlayType = 'prev' | 'next';

export const fetchCurSongInfoAction = createAsyncThunk<void, number, IThunkState>(
  'fetchCurSong',
  (id, { dispatch, getState }) => {
    const { playSongList } = getState().player;
    const index = playSongList.findIndex((song) => song.id === id);

    // 判断在播放列表中是否存在歌曲，不存在则请求
    if (index === -1) {
      getCurrentSong({ ids: id }).then((res) => {
        if (res.code !== 200 || !res.songs.length) return;
        const newPlaySongList = [...playSongList, ...res.songs];
        // 改变当前播放的歌曲
        dispatch(changeCurrentSongAction(res.songs[0]));
        // 向播放列表中新增歌曲
        dispatch(changePlaySongListAction(newPlaySongList));
        // 记录当前播放列表中播放歌曲的索引
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
      });
    } else {
      // 当前播放列表中存在歌曲，更改当前播放歌曲
      dispatch(changeCurrentSongAction(playSongList[index]));
      // 记录当前播放列表中播放歌曲的索引
      dispatch(changePlaySongIndexAction(index));
    }

    dispatch(fetchSongLyricAction(id));
  }
);

export const toggleMusicAction = createAsyncThunk<void, IPlayType, IThunkState>(
  'toggleMusic',
  (type, { dispatch, getState }) => {
    const { playMode, playSongIndex, playSongList } = getState().player;

    // 根据不同的播放模式播放歌曲
    let newIndex = playSongIndex;
    // 随机播放
    if (playMode === 1) {
      // 随机抽取下一首，并保证不和当前一样
      while (newIndex === playSongIndex) {
        newIndex = ramdonNumber(0, playSongList.length - 1);
      }
    } else {
      // 列表循环和单曲循环
      newIndex = type === 'prev' ? playSongIndex - 1 : playSongIndex + 1;
      newIndex < 0 && (newIndex = playSongList.length - 1);
      newIndex > playSongList.length - 1 && (newIndex = 0);
    }
    dispatch(changePlaySongIndexAction(newIndex));
    dispatch(changeCurrentSongAction(playSongList[newIndex]));
    dispatch(fetchSongLyricAction(playSongList[newIndex].id));
  }
);

const fetchSongLyricAction = createAsyncThunk<void, number>('fetchLyric', (id, { dispatch }) => {
  getSongLyric({ id }).then((res) => {
    if (res.code !== 200 || !res.lrc?.lyric) return;
    const lyriclist = parseLyric(res.lrc.lyric);
    dispatch(changeCurrentLyricAction(lyriclist));
  });
});

const initialState: IPlayState = {
  currentSong: {}, // 当前播放的歌曲
  currentLyric: [], // 当前播放歌曲的歌词
  lyricIndex: -1, // 当前唱到的歌词
  playSongList: [], // 播放列表
  playSongIndex: -1, // 播放列表中的歌曲索引
  playMode: 0 // 0：列表顺序  1：随机  2：单曲循环
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }: PayloadAction<Record<string, any>>) {
      state.currentSong = payload;
    },
    changeCurrentLyricAction(state, { payload }: PayloadAction<ILyric[]>) {
      state.currentLyric = payload;
    },
    changeLyricIndexAction(state, { payload }: PayloadAction<number>) {
      state.lyricIndex = payload;
    },
    changePlaySongListAction(state, { payload }: PayloadAction<any[]>) {
      state.playSongList = payload;
    },
    changePlaySongIndexAction(state, { payload }: PayloadAction<number>) {
      state.playSongIndex = payload;
    },
    changePlayModeAction(state, { payload }: PayloadAction<number>) {
      state.playMode = payload;
    }
  }
});

export const {
  changeCurrentSongAction,
  changeCurrentLyricAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions;
export default playerSlice.reducer;
