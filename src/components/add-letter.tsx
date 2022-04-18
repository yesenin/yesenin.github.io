import {useFormik} from 'formik';
import React from 'react';
import {addLetterCall} from '../firebase/firebase.util';
import {ArmenianLetter} from '../models/armenian-letter';

import './add-letter.scss';

export const AddLetter = () => {
    const addLetter = (letter: ArmenianLetter): Promise<void> => {
        return addLetterCall(letter);
    };

    const addLetterForm = useFormik<ArmenianLetter>({
        initialValues: {
            id: '',
            capital: '',
            small: '',
            isVowel: false,
            isConsonant: false,
            isOriginal: false,
            keyboardRow: 0,
            keyboardCol: 1,
            alphabetOrder: 0,
            russianName: '',
            englishName: '',
            ipa: '',
            armenianName: '',
            transliteration: '',
        },
        onSubmit: (newLetter: ArmenianLetter) => {
            addLetter(newLetter).then(() => {
                addLetterForm.resetForm();
            });
        },
    });

    return <>
        <h3>Добавить букву.</h3>
        <div>
            <form onSubmit={addLetterForm.handleSubmit} onReset={addLetterForm.handleReset}>
                <div className='form-row horizontal'>
                    <div>
                        <label htmlFor='capital'>Прописная</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Прописная'
                            id='capital' name='capital' value={addLetterForm.values.capital}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='small'>Строчная</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Строчная'
                            id='small' name='small' value={addLetterForm.values.small}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                </div>
                <div className='form-row click'>
                    <div>
                        <label htmlFor='isVowel'>Оригинальная</label>
                        <input type='checkbox'></input>
                    </div>
                </div>
                <div className='form-row horizontal click'>
                    <div className='form-col'>
                        <input type='radio' name='vowel'/>
                        <label htmlFor='vowel'>Гласная</label>
                    </div>
                    <div className='form-col'>
                        <input type='radio' name='consonant'/>
                        <label htmlFor='consonant'>Согласная</label>
                    </div>
                </div>
                <div className='form-row horizontal'>
                    <div className='form-col'>
                        <label htmlFor='armenianName'>Армянское имя</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Армянское имя'
                            id='armenianName' name='armenianName' value={addLetterForm.values.armenianName}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                    <div className='form-col'>
                        <label htmlFor='russianName'>Русское имя</label>
                        <input type='text' maxLength={2} minLength={1} placeholder='Русское имя'
                            id='russianName' name='russianName' value={addLetterForm.values.russianName}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                    <div className='form-col'>
                        <label htmlFor='englishName'>Английское имя</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Английское имя'
                            id='englishName' name='englishName' value={addLetterForm.values.englishName}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <label htmlFor='ipa'>IPA</label>
                    <input type='text' maxLength={1} minLength={1} placeholder='IPA'
                        id='ipa' name='ipa' value={addLetterForm.values.ipa}
                        onChange={addLetterForm.handleChange}></input>
                </div>
                <div className='form-row horizontal'>
                    <div className='form-col'>
                        <label htmlFor='keyboardRow'>Ряд клавиатуры</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Ряд клавиатуры'
                            id='keyboardRow' name='keyboardRow' value={addLetterForm.values.keyboardRow}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                    <div className='form-col'>
                        <label htmlFor='keyboardCol'>Позиция в ряду</label>
                        <input type='text' maxLength={1} minLength={1} placeholder='Позиция в ряду'
                            id='keyboardCol' name='keyboardCol' value={addLetterForm.values.keyboardCol}
                            onChange={addLetterForm.handleChange}></input>
                    </div>
                </div>
                <div className='form-row'>
                    <label htmlFor='alphabetOrder'>Номер в алфавите</label>
                    <input type='text' maxLength={1} minLength={1} placeholder='Номер в алфавите'
                        id='alphabetOrder' name='alphabetOrder' value={addLetterForm.values.alphabetOrder}
                        onChange={addLetterForm.handleChange}></input>
                </div>
                <div className='form-row'>
                    <label htmlFor='transliteration'>Транслитерация</label>
                    <input type='text' maxLength={1} minLength={1} placeholder='Транслитерация'
                        id='transliteration' name='transliteration' value={addLetterForm.values.transliteration}
                        onChange={addLetterForm.handleChange}></input>
                </div>
                <button type='reset'>Очистить</button>
                <button type='submit'>Добавить букву</button>
            </form>
        </div>
    </>;
};
