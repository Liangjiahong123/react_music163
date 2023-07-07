import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBannersInfo, getHotRecommendInfo } from '@/services';

interface InitState {
  banners: any[];
  hotRecommends: any[];
}

const initialState: InitState = {
  banners: [],
  hotRecommends: []
};

export const fetchDiscoverData = createAsyncThunk('fetchdiscover', (extraInfo, { dispatch }) => {
  getBannersInfo().then((res) => {
    res.code === 200 && dispatch(changeBannersAction(res.banners));
  });
  getHotRecommendInfo({ limit: 8 }).then((res) => {
    res.code === 200 && dispatch(changeHotRecommendsAction(res.result));
  });
});

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload;
    },
    changeHotRecommendsAction(state, { payload }: PayloadAction<any[]>) {
      state.hotRecommends = payload;
    }
  }
});

export const { changeBannersAction, changeHotRecommendsAction } = discoverSlice.actions;
export default discoverSlice.reducer;
