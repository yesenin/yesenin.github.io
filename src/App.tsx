import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import styled from "styled-components";

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

const NavBarDiv = styled.div`
  margin: 5px;
  font-size: 10px;
`;

const App = () => {
    return <CenteredDiv>
        <NavBarDiv>
            <Link to='/calendar'>Calendar</Link>
        </NavBarDiv>
        <Outlet />
    </CenteredDiv>
}

export default App;
