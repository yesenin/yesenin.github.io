import * as React from 'react';
import {ArmenianLetters, Letter} from '../data/alphabet';

interface KeyboardProps {
    onKeyPressed: (character: string) => void;
}

export const Keyboard = (props: KeyboardProps) => {
    const {onKeyPressed} = props;
    const [shift, toggleShift] = React.useState(false);
    return <div className='keyboard'>
        <h2>Keyboard</h2>
        <div>
            <button onClick={() => toggleShift(!shift)}>Shift</button>
        </div>
        <div>
            {ArmenianLetters.map((letter: Letter) => {
                const character = shift ?
                    letter.upperCase :
                    letter.lowerCase || '_';
                return <button key={letter.id}
                    onClick={() => onKeyPressed(character)}>
                    {character}
                </button>;
            })}
        </div>
    </div>;
};
