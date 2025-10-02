import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSetItem } from '../types';

interface EnState {
  words: DataSetItem[];
}

const initialState: EnState = {
  words: [
    {
        id: 'en-1',
        value: 'diffident',
        translation: 'неуверенный в себе',
        speechUrl: '',
        kind: 'adjective'
    }
  ]
};

export const enSlice = createSlice({
  name: 'en',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<DataSetItem[]>) => {
      state.words = action.payload;
    }
  },
});

export const {
  setWords
} = enSlice.actions;

export default enSlice.reducer;
