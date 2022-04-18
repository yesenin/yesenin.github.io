export interface ArmenianLetter {
    id: string;
    capital: string;
    small: string;
    isVowel: boolean;
    isConsonant: boolean;
    isOriginal: boolean;
    russianName: string;
    englishName: string;
    armenianName: string;
    keyboardRow: number;
    keyboardCol: number;
    alphabetOrder: number;
    ipa: string;
    transliteration: string;
}
