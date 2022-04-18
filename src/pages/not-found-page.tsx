import React from 'react';
import {Link} from 'react-router-dom';

import './not-found-page.scss';

export const NotFoundPage = () => {
    return <>
        <div className='not-found'>
            <h1>Нет такой страницы.</h1>
            <p>
                Но всегда есть <Link to='/'>Главная страница</Link>.
            </p>
        </div>
    </>;
};
