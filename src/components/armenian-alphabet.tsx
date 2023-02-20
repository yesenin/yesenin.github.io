import React from 'react';
import {ArmenianLetters, Letter} from '../data/alphabet';
import ArmenianLetter from './armenian-letter';
import styled from 'styled-components';

interface ArmenianAlphabetProps {
    lowerCase?: boolean;
}

const AlphabetWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ArmenianAlphabet = (props: ArmenianAlphabetProps) => {
    const {lowerCase} = props;

    return <AlphabetWrapper>
        {ArmenianLetters.map((letter: Letter) => <ArmenianLetter
            key={letter.id}
            letter={lowerCase ? letter.lowerCase : letter.upperCase || letter.lowerCase}
            hint={letter.sound || letter.transliteration}/> )}
    </AlphabetWrapper>;
};

export default ArmenianAlphabet;
