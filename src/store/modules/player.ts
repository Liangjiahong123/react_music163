import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentSong, getSongLyric } from '@/services';
import { parseLyric, ILyric } from '@/utils';

interface IPlayState {
  currentSong: Record<string, any>;
  currentLyric: ILyric[];
  lyricIndex: number;
}

export const fetchPlayerInfo = createAsyncThunk('fetchplayer', (id: number, { dispatch }) => {
  getCurrentSong({ ids: id }).then((res) => {
    if (res.code !== 200 || !res.songs.length) return;
    dispatch(changeCurrentSongAction(res.songs[0]));
  });
  getSongLyric({ id }).then((res) => {
    if (res.code !== 200 || !res.lrc?.lyric) return;
    const lyriclist = parseLyric(res.lrc.lyric);
    dispatch(changeCurrentLyricAction(lyriclist));
  });
});

const initialState: IPlayState = {
  currentSong: {},
  currentLyric: [],
  lyricIndex: -1
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
    }
  }
});

export const { changeCurrentSongAction, changeCurrentLyricAction, changeLyricIndexAction } =
  playerSlice.actions;
export default playerSlice.reducer;
