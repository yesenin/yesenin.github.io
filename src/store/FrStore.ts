import { configureStore } from '@reduxjs/toolkit';
import fr from '../slices/FrSlice';

export const store = configureStore({
  reducer: {
    fr: fr,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;