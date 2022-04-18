import React from 'react';
import {AddLetter} from '../components/add-letter';
import {LetterTable} from '../components/letter-table';

export const AdminPage = () => {
    return <>
        <h2>Администрация.</h2>
        <AddLetter />
        <LetterTable />
    </>;
};
