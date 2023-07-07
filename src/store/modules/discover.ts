import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBannersInfo } from '@/services';

interface InitState {
  banners: any[];
}

const initialState: InitState = {
  banners: []
};

export const fetchDiscoverData = createAsyncThunk('fetchdiscover', (extraInfo, { dispatch }) => {
  getBannersInfo().then((res) => {
    res.code === 200 && dispatch(changeBannersAction(res.banners));
  });
});

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload;
    }
  }
});

export const { changeBannersAction } = discoverSlice.actions;
export default discoverSlice.reducer;
