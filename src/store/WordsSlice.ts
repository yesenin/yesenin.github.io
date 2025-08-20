import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { DataSetItem } from "../types";

interface WordsState {
    dataSet: DataSetItem[];
    searchQuery: string;
    currentArea: string;
}

const initialState: WordsState = {
    dataSet: [],
    searchQuery: "",
    currentArea: "all"
}

const WordSlice = createSlice({
    name: "words",
    initialState,
    reducers: {
        setDataSet(state, action) {
            state.dataSet = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setCurrentArea(state, action) {
            state.currentArea = action.payload;
        }
    }
});

export const getRandomWord = createSelector(
    (state: any) => state.words.dataSet,
    (dataSet) => {
        if (dataSet.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * dataSet.length);
        return dataSet[randomIndex];
    }
);

export const { setDataSet, setSearchQuery, setCurrentArea } = WordSlice.actions;

export default WordSlice.reducer;
