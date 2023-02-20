import React from 'react';
import styled from 'styled-components';

interface ArmenianLetterProps {
    letter: string;
    hint: string;
}

const LetterWrapper = styled.div`
    box-sizing: content-box;
    border-radius: 4px;
    padding: 4px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    width: 42px;
    align-items: center;
    margin: 4px 8px;

    cursor: default;

    &:hover {
        background-color: grey;
    }
`;

const LetterHint = styled.div`
    font-size: 8pt;
`;

const LetterDiv = styled.div`
    font-size: 32pt;
    line-height: 1.2;
    font-weight: bold;
`;

const ArmenianLetter = (props: ArmenianLetterProps) => {
    const {letter, hint} = props;
    return <LetterWrapper>
        <LetterHint>
            {hint}
        </LetterHint>
        <LetterDiv>
            {letter}
        </LetterDiv>
    </LetterWrapper>;
};

export default ArmenianLetter;
