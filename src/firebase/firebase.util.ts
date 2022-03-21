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

export interface Word {
    id?: string | null,
    word: string;
    translation: string;
    pronunciation: string;
}

export const getWords = (): Promise<Array<Word>> => {
    return firestore.collection('armenian').get()
        .then((snapshot: any) => {
            return snapshot.docs.map((x: any): Word => {
                const data = x.data();
                return {
                    id: data.id,
                    word: data.word,
                    translation: data.translation,
                    pronunciation: data.pronunciation,
                };
            });
        });
};

export const addWord = (word: Word) => {
    const ref = firestore.collection('armenian').doc();
    return firestore.collection('armenian').doc(ref.id).set({
        word: word.word,
        translation: word.translation,
        pronunciation: word.pronunciation && word.pronunciation,
    });
};
