/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import * as _ from 'lodash';

import {User} from 'firebase/auth';

import {auth} from './firebase/firebase.util';

import {Letter, LowercaseLetters, UppercaseLetters} from './data/alphabet';
import {LettersComponent} from './components/letters';
import {HashRouter} from 'react-router-dom';

interface AppState {
  currentUser?: User | null;
  index: number;
}

const allLetters = [...UppercaseLetters, ...LowercaseLetters];


class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null,
            index: _.random(allLetters.length - 1),
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
        const {index} = this.state;

        const letter: Letter = allLetters[index];

        return (
            <HashRouter>
                <div className="App">
                    <LettersComponent
                        letter={letter}
                        onNext={this.changeIndex}
                        oneStyle
                    />
                </div>
            </HashRouter>
        );
    }

    private changeIndex = () => {
        const newIndex = _.random(allLetters.length - 1);
        this.setState({
            index: newIndex,
        });
    };
}

export default App;
