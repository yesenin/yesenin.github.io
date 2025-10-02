import { configureStore } from '@reduxjs/toolkit';
import zh from '../slices/ZhSlice';

export const store = configureStore({
  reducer: {
    zh: zh,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;