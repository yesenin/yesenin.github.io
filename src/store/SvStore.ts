import { configureStore } from '@reduxjs/toolkit';
import sv from '../slices/SvSlice';

export const store = configureStore({
  reducer: {
    sv: sv,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;