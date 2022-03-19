import * as React from 'react';

import {User} from 'firebase/auth';
import {auth} from '../firebase/firebase.util';
import {signInWithGoogle} from '../firebase/firebase.util';

interface SignInProps {
    currentUser?: User | null
    children?: JSX.Element;
}

export const SignIn = (props: SignInProps) => {
    const {currentUser, children} = props;
    return currentUser ?
        <div>
            <div>
                <p>{currentUser.displayName}</p>
                <button onClick={() => auth.signOut()}>
                    Sign out
                </button>
            </div>
            <div>
                {children}
            </div>
        </div> :
        <button onClick={signInWithGoogle}>Sign in</button>;
};
