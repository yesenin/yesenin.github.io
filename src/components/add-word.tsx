import React from 'react';
import {addWord, Word} from '../firebase/firebase.util';
import {AddWordForm} from './add-word-form';

export const AddWord = () => {
    const addWordCall = (word: Word) => {
        return addWord(word);
    };

    return <>
        <h2>Add word</h2>
        <div>
            <AddWordForm onAddWord={addWordCall}/>
        </div>
    </>;
};
