import React from 'react';
import { foo } from './utils/some';

export const App = () => {
    return (
        <div>yesenin, {foo()}</div>
    );
}