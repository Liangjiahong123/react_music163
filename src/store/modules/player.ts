import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentSong, getSongLyric } from '@/services';
import { parseLyric, ILyric } from '@/utils';
import type { RootState } from '@/store';

interface IPlayState {
  currentSong: Record<string, any>;
  currentLyric: ILyric[];
  lyricIndex: number;
  playSongList: any[];
  playSongIndex: number;
  playMode: number;
}

export const fetchPlayerInfo = createAsyncThunk<void, number, { state: RootState }>(
  'fetchplayer',
  (id, { dispatch, getState }) => {
    const playSongList = getState().player.playSongList;
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

    getSongLyric({ id }).then((res) => {
      if (res.code !== 200 || !res.lrc?.lyric) return;
      const lyriclist = parseLyric(res.lrc.lyric);
      dispatch(changeCurrentLyricAction(lyriclist));
    });
  }
);

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
