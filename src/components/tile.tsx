import * as React from 'react';
import {Letter} from '../data/alphabet';

export const LetterTile = (props: {letter: Letter, style: string}) => {
    const {letter, style} = props;
    return <div>
        <div className={`tile-${style}`}>
            {letter.armenian}
        </div>
        <div className='transliteration'>
            {letter.capital ?
                letter.transliteration.toUpperCase() :
                letter.transliteration
            }
        </div>
    </div>;
};
