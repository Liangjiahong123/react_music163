import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getBannersInfo,
  getHotRecommendInfo,
  getNewAlbumInfo,
  getSongRankingInfo,
  getArtistListInfo
} from '@/services';

interface InitState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
  rankings: any[];
  artistList: any[];
}

const initialState: InitState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  artistList: []
};

export const fetchRecommendData = createAsyncThunk('fetchdiscover', (extraInfo, { dispatch }) => {
  getBannersInfo().then((res) => {
    res.code === 200 && dispatch(changeBannersAction(res.banners));
  });

  getHotRecommendInfo({ limit: 8 }).then((res) => {
    res.code === 200 && dispatch(changeHotRecommendsAction(res.result));
  });

  getNewAlbumInfo().then((res) => {
    res.code === 200 && dispatch(changeNewAlbumsAction(res.albums));
  });

  getArtistListInfo({ limit: 5 }).then((res) => {
    res.code === 200 && dispatch(changeArtistListAction(res.artists));
  });

  const promises = [19723756, 3779629, 2884035].map((id) => getSongRankingInfo({ id }));
  Promise.all(promises).then((res) => {
    const rankings = res.map((item) => item.playlist);
    dispatch(changeRankingsAction(rankings));
  });
});

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<any[]>) {
      state.banners = payload;
    },
    changeHotRecommendsAction(state, { payload }: PayloadAction<any[]>) {
      state.hotRecommends = payload;
    },
    changeNewAlbumsAction(state, { payload }: PayloadAction<any[]>) {
      state.newAlbums = payload;
    },
    changeRankingsAction(state, { payload }: PayloadAction<any[]>) {
      state.rankings = payload;
    },
    changeArtistListAction(state, { payload }: PayloadAction<any[]>) {
      state.artistList = payload;
    }
  }
});

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeArtistListAction
} = recommendSlice.actions;
export default recommendSlice.reducer;
