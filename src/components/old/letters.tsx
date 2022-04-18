import * as React from 'react';
import * as _ from 'lodash';
import {Letter} from '../../data/alphabet';
import {LetterTile} from './tile';

const styles = ['sans', 'serif', 'decorative', 'school', 'hand'];

interface LettersComponentProps {
    letter: Letter;
    onNext: any;
    oneStyle?: boolean;
}

export const LettersComponent = (props: LettersComponentProps) => {
    const {letter, onNext, oneStyle} = props;
    const style = oneStyle ? 'serif' : _.sample(styles) || 'sans';
    return <>
        <div className='letters'>
            <LetterTile letter={letter} style={style} isUpperCase/>
        </div>
        <button
            onClick={onNext}
            className='button'>
                Next
        </button>
    </>;
};
