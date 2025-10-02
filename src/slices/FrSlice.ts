import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSetItem } from '../types';

interface FrState {
  words: DataSetItem[];
}

const initialState: FrState = {
  words: [
    {
        id: 'fr-1',
        value: 'tranche',
        translation: 'ломтик',
        speechUrl: '',
        kind: 'noun'
    }
  ]
};

export const frSlice = createSlice({
  name: 'fr',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<DataSetItem[]>) => {
      state.words = action.payload;
    }
  },
});

export const {
  setWords
} = frSlice.actions;

export default frSlice.reducer;
