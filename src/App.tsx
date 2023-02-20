import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RootRoute from './routes/root-route';
import ArmenianAlphabetRoute from './routes/armenian/alphabet-route';
import ArmenianRootRoute from './routes/armenian/root-route';
import NotFoundRoute from './routes/not-found-route';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootRoute />}>
                    <Route path='armenian/' element={<ArmenianRootRoute />}>
                        <Route path='alphabet' element={<ArmenianAlphabetRoute />}/>
                    </Route>
                </Route>
                <Route path='*' element={<NotFoundRoute />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
