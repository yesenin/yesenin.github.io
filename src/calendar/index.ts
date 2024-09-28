export interface Month {
    number: number;
    name: string;
};

export const russianMonths: Month[] = [
    { number: 1, name: 'Январь' },
    { number: 2, name: 'Февраль' },
    { number: 3, name: 'Март' },
    { number: 4, name: 'Апрель' },
    { number: 5, name: 'Май' },
    { number: 6, name: 'Июнь' },
    { number: 7, name: 'Июль' },
    { number: 8, name: 'Август' },
    { number: 9, name: 'Сентябрь' },
    { number: 10, name: 'Октябрь' },
    { number: 11, name: 'Ноябрь' },
    { number: 12, name: 'Декабрь' }
];

export interface WeekDay {
    number: number;
    name: string;
    isWeekend?: boolean;
};

export const russianWeekDays: WeekDay[] = [
    { number: 1, name: 'Пн' },
    { number: 2, name: 'Вт' },
    { number: 3, name: 'Ср' },
    { number: 4, name: 'Чт' },
    { number: 5, name: 'Пт' },
    { number: 6, name: 'Сб', isWeekend: true },
    { number: 7, name: 'Вс', isWeekend: true }
];

export interface Week {
    number: number;
    shift: number;
    days: number[];
    isWeekend?: boolean;
};