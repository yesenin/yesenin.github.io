import {toNumber} from 'lodash';
import React, {ChangeEvent, useState} from 'react';
import {TextBlock} from '../components/text-block';

import './sum-page.scss';

const numbers = ['', 'մեկ', 'երկու', 'երեք', 'չորս', 'հինգ', 'վեց', 'յոթ', 'ութ', 'ինը', 'տասը'];

const getA = (a: number): any => {
    switch (a) {
    case 6:
    case 8:
    case 9:
        return <>{numbers[a]}</>;
    default:
        return <>{numbers[a]}<b>ին</b></>;
    }
};

const getB = (b: number): any => {
    switch (b) {
    case 1:
    case 2:
        return <>{numbers[b]}</>;
    case 5:
        return <>{numbers[b]}<b>գ</b></>;
    default:
        return <>{numbers[b]}<b>ը</b></>;
    }
};

const getC = (c: number): any => {
    switch (c) {
    case 1:
    case 8:
        return <>{numbers[c]}</>;
    default:
        return <>{numbers[c]}<b>սի</b></>;
    }
};

export const SumPage = () => {
    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(1);
    return <div>
        <h2>Sum page</h2>
        <div>
            <TextBlock>
                {numbers.map((n: string) => `${n} `)}
            </TextBlock>
        </div>
        <div className='calc'>
            <input type='number' min={1} max={9} value={a}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setA(toNumber(e.target.value))}/>
            <input type='number' min={1} max={10-a} value={b}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setB(toNumber(e.target.value))}/>
            <input type='number' readOnly value={a + b}/>
        </div>
        <div>
            <TextBlock>
                {getA(a)} գումարած {getB(b)} հավասար է {getC(a + b)}<br/>
            </TextBlock>
        </div>
    </div>;
};
