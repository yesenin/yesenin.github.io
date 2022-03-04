import * as React from 'react';

import {User} from 'firebase/auth';
import {auth} from '../firebase/firebase.util';
import {signInWithGoogle} from '../firebase/firebase.util';

export const SignIn = (currentUser?: User | null) => {
    return currentUser ?
        <div>
            <p>{currentUser.displayName}</p>
            <button onClick={() => auth.signOut()}>
                  Sign out
            </button>
        </div> :
        <button onClick={signInWithGoogle}>Sign in</button>;
};
