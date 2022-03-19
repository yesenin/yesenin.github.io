/* eslint-disable require-jsdoc */
import React from 'react';
import './App.css';
import _ from 'lodash';

import {User} from 'firebase/auth';

import {auth, getWords, Word} from './firebase/firebase.util';

import {Letter, ArmenianLetters} from './data/alphabet';
import {GameLetterTile} from './components/game-tile';
import {SignIn} from './components/sign-in';
import {AddWord} from './components/add-word';

interface AppState {
  currentUser?: User | null;
  index: number;
  answer?: string | null;
  totalClicks: number;
  rightClicks: number;
  isUpperCase: boolean;
  mode: number;
  word: Word;
  words: Array<Word>;
}

const emptyWord: Word = {
    word: '',
    translation: '',
    pronunciation: '',
};

interface Option {
    id: number;
    letter: Letter;
}

const modes: Array<number> = [
    1, // name
    2, // opposite
];

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: null,
            index: _.random(ArmenianLetters.length - 1),
            totalClicks: 0,
            rightClicks: 0,
            isUpperCase: _.random(2) > 1,
            mode: _.sample(modes) || 1,
            word: emptyWord,
            words: [],
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
        const {
            words,
            currentUser,
        } = this.state;

        return (
            <SignIn currentUser={currentUser}>
                <>
                    <AddWord />
                    <div>
                        <h3>Words</h3>
                        <table>
                            <tr>
                                <th>Word</th>
                                <th>Translation</th>
                                <th>Pronunciation</th>
                            </tr>
                            {words.map((w: Word) => {
                                return <tr key={w.translation}>
                                    <td>{w.word}</td>
                                    <td>{w.translation}</td>
                                    <td>{w.pronunciation}</td>
                                </tr>;
                            })}
                        </table>
                    </div>
                    <div>
                        <button onClick={() => this.getWordsHere()}>
        Get words
                        </button>
                    </div>
                </>
            </SignIn>
        );
    }

    private getWordsHere = () => {
        const {words} = this.state;
        if (words.length === 0) {
            getWords()
                .then((words: Array<Word>) => {
                    this.setState({
                        words,
                    });
                });
        }
    };

    private renderGame = () => {
        const {
            index,
            answer,
            totalClicks,
            rightClicks,
            isUpperCase,
            mode,
        } = this.state;

        const letter: Letter = ArmenianLetters[index];

        const otherLetters = [
            this.getAnother(letter.id, isUpperCase),
            this.getAnother(letter.id, isUpperCase)];

        const options: Array<Option> = [letter, ...otherLetters]
            .map((l: Letter) => ({id: l.id, letter: l}));

        return <div className="App">
            <div className='letters'>
                <GameLetterTile
                    letter={letter}
                    isUpperCase={isUpperCase}
                    style='serif'
                />
            </div>
            {answer && <div><h3>{answer}</h3></div>}
            <div>
                {_.shuffle(options)
                    .map((o: Option) => {
                        return <button
                            disabled={!!answer}
                            className='button'
                            key={o.id}
                            onClick={() => this.checkOption(o.id)}>
                            {mode == 1 ?
                                o.letter.pronunciation :
                                isUpperCase ?
                                    o.letter.lowerCase :
                                    o.letter.upperCase }
                        </button>;
                    },
                    )}
            </div>
            <div>
                <button
                    disabled={!answer}
                    className='button'
                    onClick={this.changeIndex}>Next</button>
            </div>
            <div>
                <h2>{rightClicks} for {totalClicks}</h2>
            </div>
        </div>;
    };

    private checkOption = (selected: number) => {
        const {index, totalClicks, rightClicks} = this.state;
        if (selected === index) {
            this.setState({
                answer: 'OK',
                totalClicks: totalClicks + 1,
                rightClicks: rightClicks + 1,
            });
        } else {
            const letter: Letter = ArmenianLetters[index];
            this.setState({
                answer: `No, it's ${letter.pronunciation}`,
                totalClicks: totalClicks + 1,
            });
        }
    };

    private changeIndex = () => {
        const newIndex = _.random(ArmenianLetters.length - 1);
        this.setState({
            index: newIndex,
            answer: null,
            isUpperCase: _.random(2) > 1,
            mode: _.sample(modes) || 1,
        });
    };

    private getAnother = (id: number, isUpperCase: boolean): Letter => {
        const shift = isUpperCase ? 1 : 3;
        let anotherIndex: number = _.random(ArmenianLetters.length - shift);
        while (ArmenianLetters[anotherIndex].id === id) {
            anotherIndex = _.random(ArmenianLetters.length - shift);
        }
        return ArmenianLetters[anotherIndex];
    };
}

export default App;
