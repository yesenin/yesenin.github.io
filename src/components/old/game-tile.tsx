import * as React from 'react';
import {Letter} from '../../data/alphabet';


interface GameTileProps {
    letter: Letter;
    style: string;
    isUpperCase: boolean;
}

export const GameLetterTile = (props: GameTileProps) => {
    const {letter, style, isUpperCase} = props;
    return <div className='tile-wrapper'>
        <div className='tile'>
            <div className={`tile-${style}`}>
                {isUpperCase ? letter.upperCase : letter.lowerCase}
            </div>
        </div>
    </div>;
};
