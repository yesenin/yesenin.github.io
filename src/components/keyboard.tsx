import * as React from 'react';
import * as _ from 'lodash';
import {ArmenianLetters, Letter} from '../data/alphabet';

import './keyboard.scss';

interface KeyboardProps {
    onKeyPressed: (character: string) => void;
}

export const Keyboard = (props: KeyboardProps) => {
    const {onKeyPressed} = props;
    const [shift, toggleShift] = React.useState(false);

    const rows: _.Dictionary<Array<Letter>> = _.groupBy(ArmenianLetters, (x: Letter) => x.row);
    return <div className='keyboard'>
        <h2>Keyboard</h2>
        <div>
            {_.keys(rows).map((r: any) => {
                return <div key={r}>
                    {_.orderBy(rows[r], (l: Letter) => l.position)
                        .map((l: Letter) => {
                            const character = shift ? l.upperCase : l.lowerCase || '_';
                            return <button key={l.id} type='button'
                                className='keyboard-key'
                                onClick={() => onKeyPressed(character)}
                                title={l.pronunciation}>
                                {character}
                            </button>;
                        })}
                </div>;
            })}
            <div>
                <button className='keyboard-key double-key' onClick={() => toggleShift(!shift)} type='button'>
                    {shift ? 'SHIFT' : 'shift'}
                </button>
            </div>
        </div>
    </div>;
};
