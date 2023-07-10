import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentSong } from '@/services';

interface IPlayState {
  currentSong: Record<string, any>;
}

export const fetchPlayerInfo = createAsyncThunk('fetchplayer', (ids: number[], { dispatch }) => {
  getCurrentSong({ ids: ids.join(',') }).then((res) => {
    console.log(res);
  });
});

const initialState: IPlayState = {
  currentSong: {
    id: '',
    picUrl: '',
    name: '',
    authors: [],
    dt: ''
  }
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    }
  }
});

export default playerSlice.reducer;
