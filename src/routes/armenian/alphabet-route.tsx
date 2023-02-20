import * as React from 'react';
import styled from 'styled-components';
import ArmenianAlphabet from '../../components/armenian-alphabet';

const CenterFlex = styled.div`
    display: flex;
    justify-content: center;
    width: 600px;
`;

const ArmenianAlphabetRoute = () => {
    return <CenterFlex>
        <ArmenianAlphabet />
    </CenterFlex>;
};

export default ArmenianAlphabetRoute;
