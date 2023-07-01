import { configureStore } from '@reduxjs/toolkit';
import discoverReducer from './modules/discover';

const store = configureStore({
  reducer: {
    discover: discoverReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
