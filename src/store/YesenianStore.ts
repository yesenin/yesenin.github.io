import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./WordsSlice";

const YesenianStore = configureStore({
    reducer: {
        words: wordsReducer,
    }
});

export type RootState = ReturnType<typeof YesenianStore.getState>;
export default YesenianStore;
