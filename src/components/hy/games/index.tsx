export interface WordEntity {
    id: string;
    value: string;
    // kind: string; // noun, verb, adjective
    // tags: string[];
    translation: string;
    speechUrl: string;
}

export interface ResultItem {
    word: string;
    correct: boolean;
    typos: number;
}