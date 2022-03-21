import _ from 'lodash';
import React from 'react';
import {getWords, Word} from '../firebase/firebase.util';


interface WordListState {
    words: Array<Word>;
}

export class WordList extends React.Component<{}, WordListState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            words: [],
        };
    }

    public render() {
        const {words} = this.state;

        return <><div>
            <h3>Words</h3>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Translation</th>
                        {/* <th>Pronunciation</th> */}
                    </tr>
                </thead>
                <tbody>
                    {_.orderBy(words, (w: Word) => w.translation).map((w: Word) => {
                        return <tr key={w.translation}>
                            <td><b>{w.word}</b></td>
                            <td>{w.translation}</td>
                            {/* <td><i>[{w.pronunciation}]</i></td> */}
                        </tr>;
                    })}
                </tbody>
            </table>
        </div><div>
            <button onClick={() => this.getWordsHere()}>
                    Get words
            </button>
        </div></>;
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
}
