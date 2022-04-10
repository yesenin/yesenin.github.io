import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Game} from '../components/game';
import {WordList} from '../components/word-list';
import {SumPage} from '../pages/sum-page';

export const ArmenianRoutes = () => {
    return <div>
        <div>
            <Link to='./game'>Game</Link>
            <Link to='./words'>Words</Link>
            <Link to='./sum'>Sum</Link>
        </div>
        <Routes>
            <Route path='/' element={<Game />} />
            <Route path='/game' element={<Game />} />
            <Route path='/words' element={<WordList />} />
            <Route path='/sum' element={<SumPage />} />
        </Routes>
    </div>;
};
