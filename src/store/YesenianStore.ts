import { configureStore } from '@reduxjs/toolkit';
import { graphqlApi } from '../services/graphqlApi';

export const store = configureStore({
  reducer: {
    [graphqlApi.reducerPath]: graphqlApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(graphqlApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
