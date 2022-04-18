import {User} from 'firebase/auth';
import React from 'react';
import {AddWord} from './add-word';
import {SignIn} from '../sign-in';

interface AdminPageProps {
    currentUser: User | null;
}

export const AdminPagea = (props: AdminPageProps) => {
    const {currentUser} = props;
    return <SignIn currentUser={currentUser}>
        <AddWord />
    </SignIn>;
};

