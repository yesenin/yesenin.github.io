import _ from "lodash";
import { useEffect, useReducer } from "react";
import HyWordTile from "./HyWordTile";

import './HyCards.css';
import { useSelector } from "react-redux";
import { DataSetItem } from "../../types";

interface GameItem {
    id: string;
    value: string;
    order: number;
}

interface GameState {
    phase: string;
    size: number;
    leftColumn: GameItem[];
    rightColumn: GameItem[];
    selectedLeft: string | null;
    selectedRight: string | null;
    lives: number;
    streak: number;
    numberToAdd: number;
    played: string[];
    addNewItems?: boolean;
    nextAction: string | null;
    canAdd?: boolean;
}

const initialState: GameState = {
    phase: "INIT",
    size: 0,
    leftColumn: [],
    rightColumn: [], 
    selectedLeft: null,
    selectedRight: null,
    lives: 0,
    streak: 0,
    numberToAdd: 0,
    played: [],
    addNewItems: false,
    nextAction: null,
    canAdd: false,
}

function gameReducer(state: GameState, action: any): GameState {
    state = Object.assign({}, state, {nextAction: null});
    switch (action.type) {
        case 'START_GAME':
            let mockData: DataSetItem[] = action;
            const emptyLeftColumn = Array.from({ length: state.size }, (_, i) => ({
                id: `left-${i}`,
                value: '',
                order: i
            }));
            mockData = _.shuffle(mockData);
            const startLeftColumn = emptyLeftColumn.map((item: GameItem, i: number) => ({
                ...item,
                value: mockData[i].hy
            }));
            const emptyRightColumn = Array.from({ length: state.size }, (_, i) => ({
                id: `right-${i}`,
                value: '',
                order: i
            }));
            mockData = _.shuffle(mockData);
            const startRightColumn = emptyRightColumn.map((item: GameItem, i: number) => ({
                ...item,
                value: mockData[i].ru
            }));
            return Object.assign({}, state, {
                phase: 'PLAYING',
                leftColumn: startLeftColumn,
                rightColumn: startRightColumn,
                lives: 3,
            });
        case 'SELECT_LEFT':
            const nextSelectedLeft = action.index === state.selectedLeft ? null : action.index;
            return Object.assign({}, state, {
                selectedLeft: nextSelectedLeft,
            });
        case 'SELECT_RIGHT':
            const nextSelectedRight = action.index === state.selectedRight ? null : action.index;
            return Object.assign({}, state, {
                selectedRight: nextSelectedRight,
            });
        case 'MATCH_PAIR':
            const leftValue = state.leftColumn.find(item => item.id === state.selectedLeft);
            const rightValue = state.rightColumn.find(item => item.id === state.selectedRight);

            if (leftValue?.value === rightValue?.value) {
                const nextPlayed = [...state.played, state.selectedRight, state.selectedLeft];
                const nextLeftColumn = state.leftColumn.map(item => item.id === leftValue?.id ? { ...item, value: '' } : item);
                const nextRightColumn = state.rightColumn.map(item => item.id === rightValue?.id ? { ...item, value: '' } : item);
                return Object.assign({}, state, {
                    leftColumn: nextLeftColumn,
                    rightColumn: nextRightColumn,
                    selectedLeft: null,
                    selectedRight: null,
                    // played: nextPlayed,
                    streak: state.streak + 1,
                    numberToAdd: state.numberToAdd + 1,
                });
            } else {
                const nextLives = state.lives - 1;
                return Object.assign({}, state, {selectedLeft: null, selectedRight: null, lives: nextLives, streak: 0});
            }
        case 'ADD_NEW_PAIR':
            const newItem = action.payload;
            const emptyLeftPlaces = state.leftColumn.filter(item => item.value === '');
            const emptyRightPlaces = state.rightColumn.filter(item => item.value === '');
            const leftOrder = _.sample(emptyLeftPlaces)?.order;
            const rightOrder = _.sample(emptyRightPlaces)?.order;
            const nextLeftColumn = state.leftColumn.map(item => item.order === leftOrder ? {id: `left-${leftOrder}`, value: newItem.hy, order: leftOrder} : item);  //[...state.leftColumn, { id: `left-${state.leftColumn.length}`, value: newItem, order: _.sample(emptyLeftPlaces)?.order }];
            const nextRightColumn = state.rightColumn.map(item => item.order === rightOrder ? {id: `right-${rightOrder}`, value: newItem.ru, order: rightOrder} : item); //[...state.rightColumn, { id: `right-${state.rightColumn.length}`, value: newItem, order: _.sample(emptyRightPlaces)?.order }];
            return Object.assign({}, state, {
                leftColumn: nextLeftColumn,
                rightColumn: nextRightColumn,
                numberToAdd: state.numberToAdd - 1
            });
        case 'FINISH_GAME':
            return Object.assign({}, state, {phase: 'FINISHED'});
        case 'TOGGLE_CAN_ADD':
            return Object.assign({}, state, {canAdd: !state.canAdd});
        default:
            return state;
    }
};

function HyCards() {
    const size = 4;

    const originalDataSet: DataSetItem[] = useSelector((state: any) => state.words.dataSet);

    const [game, dispatch] = useReducer(gameReducer, Object.assign({}, initialState, {size}));
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const leftKeys = Array.from({ length: size }, (_, i) => `${i + 1}`);
        const rightKeys = Array.from({ length: size }, (_, i) => `${(i + size + 1) % 10}`);
        if (leftKeys.includes(e.key)) {
            const index = parseInt(e.key) - 1;
            dispatch({ type: 'SELECT_LEFT', index: `left-${index}` });
        } else if (rightKeys.includes(e.key)) {
            const index = parseInt(e.key) - 1 - size;
            dispatch({ type: 'SELECT_RIGHT', index: `right-${index}` });
        }
    }

    useEffect(() => {
        if (game.selectedLeft && game.selectedRight) {
            dispatch({ type: 'MATCH_PAIR'})
        }
    }, [game.selectedLeft, game.selectedRight]);

    useEffect(() => {
        if (game.lives === 0) {
            dispatch({type: 'FINISH_GAME'});
        }
    }, [game.lives]);

    useEffect(() => {
        if (game.nextAction) {
            setTimeout(() => {
                dispatch({ type: game.nextAction })
            }, 1000);
        }
    }, [game.nextAction]);

    useEffect(() => {
        if (game.canAdd) {
            if (game.numberToAdd > 0) {
                setTimeout(() => {
                    dispatch({ type: 'ADD_NEW_PAIR', payload: _.sample(originalDataSet) })
                }, 1000);
            }
            if (game.numberToAdd === 0) {
                dispatch({ type: 'TOGGLE_CAN_ADD' });
            }
        } else {
            if (game.numberToAdd > 0) {
                dispatch({ type: 'TOGGLE_CAN_ADD' });
            }
        }
    }, [game.numberToAdd])

    return (
        <div className="gameWrapper" onKeyDown={handleKeyDown} tabIndex={0}>
            <div>
                <h2>Match game</h2>
            </div>
            {game ? <>
                {game.phase !== 'PLAYING' ? (
                    <div><button onClick={() => dispatch({ type: 'START_GAME', action: _.sampleSize(originalDataSet, game.size) })}>Start Game</button></div>
                ) : (
                    <>
                        <div>
                            Lives: {game.lives}, Streak: {game.streak}
                        </div>
                        <div className="columns">
                            <div className="column">
                                {game.leftColumn.map((item: GameItem) => (
                                    <HyWordTile
                                        key={item.id}
                                        uiKey={(item.order + 1).toString()}
                                        text={item.value}
                                        speechUrl={null}
                                        selected={game.selectedLeft === item.id}
                                        disabled={game.played.indexOf(item.id) >= 0}
                                        empty={item.value === ''}
                                        onClick={() => dispatch({type: 'SELECT_LEFT', index: item.id})} />
                                ))}
                            </div>
                            <div className="column">
                                {game.rightColumn.map((item: GameItem) => (
                                    <HyWordTile
                                        key={item.id}
                                        uiKey={((item.order + size + 1) % 10).toString()}
                                        text={item.value}
                                        speechUrl={null}
                                        selected={game.selectedRight === item.id}
                                        disabled={game.played.indexOf(item.id) >= 0}
                                        empty={item.value === ''}
                                        onClick={() => dispatch({type: 'SELECT_RIGHT', index: item.id})} />
                                ))}
                            </div>
                        </div>
                    </>
                )}</> : <>Game is null</>}
        </div>
    )
}

export default HyCards;