import React from 'react';
import {Link} from 'react-router-dom';

export const MainPage = () => {
    return <>
        <h2>Интересное и полезное.</h2>
        <p className='big'>
            Армянский язык.&nbsp;
            <Link to='/armenian/letters'>Буквы</Link>.&nbsp;
            <Link to='/armenian/keyboard'>Клавиатура</Link>.&nbsp;
            <Link to='/armenian/numerals'>Числительные</Link>.
        </p>
    </>;
};
