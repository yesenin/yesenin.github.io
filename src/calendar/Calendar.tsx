import React from 'react';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Calendar = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;
`;

const MonthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
`;

const Month = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 5px;
    row-gap: 5px;
`;


const sortedRusMonths = ['Август', 'Апрель', 'Декабрь', 'Июль', 'Июнь', 'Май', 'Март', 'Ноябрь', 'Октябрь', 'Сентябрь', 'Февраль', 'Январь'];

const sortedRusWeekDays = ['Вс', 'Вт', 'Пн', 'Пт', 'Сб', 'Ср', 'Чт']

const CalendarPage = () => {
    return (
        <CalendarWrapper>
            <h2>Бёйнтуы календарь 2024</h2>
            <Calendar>
                {sortedRusMonths.map((month, index) => <MonthWrapper key={index}>
                    <h3>{month}</h3>
                    <Month>
                        <div>#</div>
                        {sortedRusWeekDays.map((day, index) => <div key={index}>{day}</div>)}
                    </Month>
                </MonthWrapper>)}
            </Calendar>
        </CalendarWrapper>
    );
}

export default CalendarPage;