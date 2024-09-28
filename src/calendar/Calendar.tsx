import React from 'react';
import styled from 'styled-components';
import {Month, russianMonths, WeekDay, russianWeekDays, Week} from '.';
import * as _ from 'lodash';
import moment from 'moment';

const CalendarWrapperDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CalendarDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;
`;

const MonthWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
`;

const MonthDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 5px;
    row-gap: 5px;
`;

const DayHeaderDiv = styled.div`
    font-weight: bold;
`;

const WeekNumberDiv = styled.div`
    color: gray;
    font-size: 12px;
`;

const DayDiv = styled.div`
    font: monospace;
    text-align: right;
`;

const sortedRusMonths: Month[] = _.sortBy(russianMonths, (m: Month) => m.name);

const sortedRusWeekDays: WeekDay[] = _.sortBy(russianWeekDays, (wd: WeekDay) => wd.name);

const getMonth = (monthNumber: number): Week[] => {
    const m = moment(`2024-${monthNumber}-1`);
    let weekNumber = m.week();
    let d = 1;
    const result: Week[] = [];
    let currentWeek: Week = {
        number: weekNumber,
        shift: m.weekday(),
        days: [0, 0, 0, 0, 0, 0, 0]
    };

    const daysInMonth = m.daysInMonth();

    let w = m.weekday();

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

const CalendarPage = () => {
    return (
        <CalendarWrapperDiv>
            <h2>Бёйнтуы календарь 2024</h2>
            <CalendarDiv>
                {sortedRusMonths.map((month: Month) => <MonthWrapperDiv key={month.number}>
                    <h3>{month.name}</h3>
                    <MonthDiv>
                        <div></div>
                        {sortedRusWeekDays.map((day: WeekDay) => <DayHeaderDiv key={day.number}>{day.name}</DayHeaderDiv>)}
                        {getMonth(month.number).map((week: Week) => {
                            return <>
                                <WeekNumberDiv>{week.number}</WeekNumberDiv>
                                {week.days.map((day: number) => <DayDiv key={day}>{day || ''}</DayDiv>)}
                            </>
                        })} 
                    </MonthDiv>
                </MonthWrapperDiv>)}
            </CalendarDiv>
        </CalendarWrapperDiv>
    );
}

export default CalendarPage;