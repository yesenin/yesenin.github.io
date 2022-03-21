import {useFormik} from 'formik';
import * as React from 'react';
import {Word} from '../firebase/firebase.util';
import {Keyboard} from './keyboard';

import './add-word-form.scss';

interface AddWordFormProps {
    onAddWord: (word: Word) => Promise<void>;
}

export const AddWordForm = (props: AddWordFormProps) => {
    const {onAddWord} = props;

    const formik = useFormik({
        initialValues: {
            word: '',
            translation: '',
            pronunciation: '',
        },
        onSubmit: (values: any) => {
            onAddWord({
                word: values.word,
                translation: values.translation,
                pronunciation: values.pronunciation,
            }).then(() => {
                formik.resetForm();
            });
        },
    });

    const onKeyboardKeyClick = (character: string) => {
        const {word} = formik.values;
        formik.setFieldValue('word', word + character);
    };

    const onKeyDown = (e: any) => {
        if (e.keyCode === 8) {
            const {word} = formik.values;
            const newWord = word.length > 0 ? word.slice(0, word.length - 1) : word;
            formik.setFieldValue('word', newWord);
        }
    };

    return <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className='form-row'>
            <label htmlFor="word">Armenian</label>
            <input
                placeholder='Word'
                id='word'
                name='word'
                value={formik.values.word}
                onKeyDown={onKeyDown}
                onChange={() => false}></input>
        </div>
        <div className='form-row'>
            <label htmlFor="translation">Translation</label>
            <input
                placeholder='Translation'
                id='translation'
                name='translation'
                value={formik.values.translation}
                onChange={formik.handleChange}></input>
        </div>
        <div className='form-row'>
            <label htmlFor="pronunciation">Pronunciation</label>
            <input
                placeholder='Pronunciation'
                id='pronunciation'
                name='pronunciation'
                value={formik.values.pronunciation}
                onChange={formik.handleChange}></input>
        </div>
        <div className='form-row'>
            <button type='submit'>Add word</button>
            <button type='reset'>Clean</button>
        </div>
        <Keyboard onKeyPressed={onKeyboardKeyClick}/>
    </form>;
};
