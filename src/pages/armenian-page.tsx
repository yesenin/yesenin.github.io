import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Game from '../components/game';
import {WordList} from '../components/word-list';
import {SumPage} from './sum-page';

export const ArmenianPage = () => {
    return <div>
        <div>
            <ul>
                <li><Link to=''>Word list</Link></li>
                <li><Link to='game'>Game</Link></li>
                <li><Link to='sum'>Sum</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path='' element={<WordList />}/>
            <Route path='/game' element={<Game />}/>
            <Route path='/sum' element={<SumPage />}/>
        </Routes>
    </div>;
};
