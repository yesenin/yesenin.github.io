import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import {getLettersCall} from '../firebase/firebase.util';
import {ArmenianLetter} from '../models/armenian-letter';

interface LetterTableState {
    letters: Array<ArmenianLetter>;
}

export class LetterTable extends Component<{}, LetterTableState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            letters: [],
        };
    }

    componentDidMount() {
        getLettersCall().then((letters: Array<ArmenianLetter>) => this.setState({
            letters,
        }));
    }

    render(): React.ReactNode {
        const {letters} = this.state;

        const columns = [
            {
                name: 'Заглавная',
                selector: (letter: ArmenianLetter) => letter.capital,
            },
            {
                name: 'Прописная',
                selector: (letter: ArmenianLetter) => letter.small,
            },
            {
                name: 'Армянское имя',
                selector: (letter: ArmenianLetter) => letter.armenianName,
            },
            {
                name: 'Русское имя',
                selector: (letter: ArmenianLetter) => letter.russianName,
            },
            {
                name: 'Английское имя',
                selector: (letter: ArmenianLetter) => letter.englishName,
            },
            {
                name: 'IPA',
                selector: (letter: ArmenianLetter) => letter.ipa,
            },
            {
                name: 'Номер в алфавите',
                selector: (letter: ArmenianLetter) => letter.alphabetOrder,
            },
            {
                name: 'Ряд в клавиатуре',
                selector: (letter: ArmenianLetter) => letter.keyboardRow,
            },
            {
                name: 'Позиция в ряду',
                selector: (letter: ArmenianLetter) => letter.keyboardCol,
            },
            {
                name: 'Транслитерация',
                selector: (letter: ArmenianLetter) => letter.transliteration,
            },
        ];

        return <DataTable columns={columns} data={letters}/>;
    }
};
