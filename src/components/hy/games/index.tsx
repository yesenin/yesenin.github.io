export interface WordToLearn {
    value: string;
    answer: string;
}

export interface ResultItem {
    word: string;
    correct: boolean;
    typos: number;
}