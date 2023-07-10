import { configureStore } from '@reduxjs/toolkit';
import recommendReducer from './modules/discover/recommend';
import playerSlice from './modules/player';

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
