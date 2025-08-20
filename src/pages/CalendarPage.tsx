import styled from "styled-components";
import CalendarComponent from "../components/CalendarComponent";
import { createContext, useContext, useState } from "react";

const CalendarWrapperDiv = styled.div`
    margin: 10px, 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

type CalendarMode = 'russian' | 'english';
export const LanguageContext = createContext<CalendarMode>('russian');

function CalendarPage() {
    const [mode, setMode] = useState<CalendarMode>('russian');

    return (
        <LanguageContext.Provider value={mode}>
            <CalendarWrapperDiv>
                <h2>Бёйнтуы календарь 2025</h2>
                <div>
                    <span onClick={() => setMode('russian')}>русский</span> | <span onClick={() => setMode('english')}>english</span>
                </div>
                <CalendarComponent />
            </CalendarWrapperDiv>
        </LanguageContext.Provider>
    );
}

export default CalendarPage;