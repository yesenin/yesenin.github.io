import * as React from 'react';
import {Letter} from '../data/alphabet';

export const LetterTile = (props: {letter: Letter, style: string}) => {
    const {letter, style} = props;
    return <div className='tile-wrapper'>
        <div className='tile'>
            <div className={`tile-${style}`}>
                {letter.armenian}
            </div>
            <div className='amName'>
                {letter.amName}
            </div>
        </div>
        <div className='transliteration'>
            <div className='name'>
                <span>
                    {letter.name}
                </span>
                <span>
                    {letter.namePronunciation}
                </span>
            </div>
            <div className='pronunciation'>
                <span className='translatiration'>
                    {letter.capital ?
                        letter.transliteration.toUpperCase() :
                        letter.transliteration
                    }
                </span>
                <span className='ipa'>
                    {letter.pronunciation}
                </span>
            </div>
        </div>
    </div>;
};
