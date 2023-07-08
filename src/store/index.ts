import { configureStore } from '@reduxjs/toolkit';
import recommendReducer from './modules/discover/recommend';

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
