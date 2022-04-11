import React, {useState} from 'react';

import './text-block.scss';

interface TextBlockProps {
    children: any;
}

type ModeVariant = 'serif' | 'sans-serif' | 'hand' | 'school' | 'decorative';

export const TextBlock = (props: TextBlockProps) => {
    const [mode, setMode] = useState<ModeVariant>('serif');
    return <div>
        <div className='controls'>
            <span onClick={() => setMode('serif')} className={mode === 'serif' ? 'active' : ''}>Serif</span>
            <span onClick={() => setMode('sans-serif')}
                className={mode === 'sans-serif' ? 'active' : ''}>Sans Serif</span>
            <span onClick={() => setMode('hand')} className={mode === 'hand' ? 'active' : ''}>Hand</span>
            <span onClick={() => setMode('school')} className={mode === 'school' ? 'active' : ''}>School</span>
            <span onClick={() => setMode('decorative')}
                className={mode === 'decorative' ? 'active' : ''}>Decorative</span>
        </div>
        <p className={mode}>{props.children}</p>
    </div>;
};
