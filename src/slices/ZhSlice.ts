import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSetItem } from '../types';

interface ZhState {
  words: DataSetItem[];
}

const initialState: ZhState = {
  words: [
    {
        id: 'zh-1',
        value: '茶',
        translation: 'чай',
        speechUrl: '',
        kind: 'noun'
    }
  ]
};

export const zhSlice = createSlice({
  name: 'zh',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<DataSetItem[]>) => {
      state.words = action.payload;
    }
  },
});

export const {
  setWords
} = zhSlice.actions;

export default zhSlice.reducer;
