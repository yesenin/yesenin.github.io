import React from 'react';
import { getRandomInt, splitNumber } from './utils';

export const App = () => {
    const a = getRandomInt(1, 1000);
    const d = splitNumber(a);
    return (<>
        <div>{a}, {d.map(i => `${i}, `)}</div>
    </>
    );
}