import React, {useState} from 'react';

import './text-block.scss';

interface TextBlockProps {
    text: string;
}

type ModeVariant = 'serif' | 'sans-serif' | 'hand' | 'school' | 'decorative';

export const TextBlock = (props: TextBlockProps) => {
    const [mode, setMode] = useState<ModeVariant>('serif');
    return <div>
        <div className='controls'>
            <span onClick={() => setMode('serif')}>Serif</span>
            <span onClick={() => setMode('sans-serif')}>Sans Serif</span>
            <span onClick={() => setMode('hand')}>Hand</span>
            <span onClick={() => setMode('school')}>School</span>
            <span onClick={() => setMode('decorative')}>Decorative</span>
        </div>
        <p className={mode}>{props.text}</p>
    </div>;
};
