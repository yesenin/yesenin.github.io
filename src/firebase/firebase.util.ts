import {FirebaseApp} from '@firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: 'AIzaSyBG88uTin-v_rDJYNAGiKBrrbS9b-i6dnE',
    authDomain: 'yesenin-io.firebaseapp.com',
    projectId: 'yesenin-io',
    storageBucket: 'yesenin-io.appspot.com',
    messagingSenderId: '737476726205',
    appId: '1:737476726205:web:f34506c9a5dcca96ce56d4',
};

const Firebase: FirebaseApp = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;
