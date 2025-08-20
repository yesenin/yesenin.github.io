import styled from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import { englishMonths, englishWeekDays, Month, russianMonths, russianWeekDays, Week, WeekDay } from '.';
import { useContext } from 'react';
import { LanguageContext } from '../pages/CalendarPage';

const CalendarDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        column-gap: 5px;
        row-gap: 5px;
    }
`;

const MonthWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    @media (max-width: 768px) {
        padding: 5px;
        h3 {
            margin: 2px;
        }
    }
`;

const MonthDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 5px;
    row-gap: 5px;
    @media (max-width: 768px) {
        column-gap: 5px;
        row-gap: 5px;
    }
`;

const DayHeaderDiv = styled.div`
    color: blue;
`;

const WeekNumberDiv = styled.div`
    color: gray;
    font-size: 12px;
    @media (max-width: 768px) {
        font-size: 8px;
    }
`;

const DayDiv = styled.div`
    font-family: monospace;
    text-align: right;
`;



function CalendarComponent() {
    const mode = useContext(LanguageContext)

    const sortedRusMonths: Month[] = _.sortBy(mode === 'russian' ? russianMonths : englishMonths, (m: Month) => m.name);

    const sortedRusWeekDays: WeekDay[] = _.sortBy(mode === 'russian' ? russianWeekDays : englishWeekDays, (wd: WeekDay) => wd.name);

    const getMonth = (monthNumber: number): Week[] => {
        const formatedMonth = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
        const m = moment(`${moment().get('year')}-${formatedMonth}-01`);
        let weekNumber = m.week();
        let d = 1;
        const result: Week[] = [];
        let w = m.weekday() === 0 ? 7 : m.weekday();
        let currentWeek: Week = {
            number: weekNumber,
            shift: w,
            days: [0, 0, 0, 0, 0, 0, 0]
        };

        const daysInMonth = m.daysInMonth();

        while (d <= daysInMonth) {
            if (w > 7) {
                result.push(currentWeek);
                currentWeek = {
                    number: ++weekNumber,
                    shift: 0,
                    days: [0, 0, 0, 0, 0, 0, 0]
                };
                w = 1;
            }
            currentWeek.days[_.findIndex(sortedRusWeekDays, (wd: WeekDay) => wd.number === w)] = d;
            d++;
            w++;
        }
        result.push(currentWeek);
        return result;
    }

    return (
        <CalendarDiv>
            {sortedRusMonths.map((month: Month) => <MonthWrapperDiv key={`m${month.number}`}>
                <h3>{month.name}</h3>
                <MonthDiv>
                    <div></div>
                    {sortedRusWeekDays.map((day: WeekDay) => <DayHeaderDiv key={`w${day.number}_${month.number}`}>{day.name}</DayHeaderDiv>)}
                    {getMonth(month.number).map((week: Week) => {
                        return <>
                            <WeekNumberDiv>{week.number}</WeekNumberDiv>
                            {week.days.map((day: number, index: number) => <DayDiv key={`${day}_${index}_${week.number}_${month.number}`}>{day || ''}</DayDiv>)}
                        </>
                    })} 
                </MonthDiv>
            </MonthWrapperDiv>)}
        </CalendarDiv>
    );
}

export default CalendarComponent;