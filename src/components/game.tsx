import _ from 'lodash';
import React from 'react';
import { number } from 'yup';
import {ArmenianLetters, Letter} from '../data/alphabet';
import {GameLetterTile} from './game-tile';

interface Option {
    id: number;
    letter: Letter;
}

const modes: Array<number> = [
    1, // name
    2, // opposite
];

interface GameProps {
    match: any;
}

interface GameState {
    index: number;
    answer?: string | null;
    totalClicks: number;
    rightClicks: number;
    isUpperCase: boolean;
    mode: number;
  }

  /**
   * Game page
   * @param {number} id.
   */
export class Game extends React.Component<{}, GameState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            index: _.random(ArmenianLetters.length - 1),
            totalClicks: 0,
            rightClicks: 0,
            isUpperCase: _.random(2) > 1,
            mode: _.sample(modes) || 1,
        };
    }

    public render() {
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
            return <div>
                {_.shuffle(options)
                    .map((o: Option): JSX.Element => {
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
    }

    private getAnother = (id: number, isUpperCase: boolean): Letter => {
        const shift = isUpperCase ? 1 : 3;
        let anotherIndex: number = _.random(ArmenianLetters.length - shift);
        while (ArmenianLetters[anotherIndex].id === id) {
            anotherIndex = _.random(ArmenianLetters.length - shift);
        }
        return ArmenianLetters[anotherIndex];
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
};

