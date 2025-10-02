import { configureStore } from '@reduxjs/toolkit';
import en from '../slices/EnSlice';

export const store = configureStore({
  reducer: {
    en: en,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;