import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSetItem } from '../types';

interface SvState {
  words: DataSetItem[];
}

const initialState: SvState = {
  words: [
    {
        id: 'sv-1',
        value: 'små',
        translation: 'маленький',
        speechUrl: '',
        kind: 'adjective'
    }
  ]
};

export const svSlice = createSlice({
  name: 'sv',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<DataSetItem[]>) => {
      state.words = action.payload;
    }
  },
});

export const {
  setWords
} = svSlice.actions;

export default svSlice.reducer;
