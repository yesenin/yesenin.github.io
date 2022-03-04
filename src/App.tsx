/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import * as _ from 'lodash';

import {User} from 'firebase/auth';

import {auth} from './firebase/firebase.util';

import {Letter, LowercaseLetters, UppercaseLetters} from './data/alphabet';
import {LetterTile} from './components/tile';

interface AppState {
  currentUser?: User | null;
}


class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user: any) => {
            this.setState({
                currentUser: user,
            });
        });
    }

    render() {
        const allLetters = [...UppercaseLetters, ...LowercaseLetters];
        const letter: Letter = _.sample(allLetters) || allLetters[0];

        return (
            <div className="App">
                <LetterTile letter={letter} style='decorative'/>
                <LetterTile letter={letter} style='school'/>
                <LetterTile letter={letter} style='hand'/>
                <LetterTile letter={letter} style='sans'/>
                <LetterTile letter={letter} style='serif'/>
            </div>
        );
    }
}

export default App;
