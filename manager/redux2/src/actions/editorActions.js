import * as types from './actionTypes'

export const openEditor = (note) => {
    return {type: types.OPEN_EDITOR, note}
}

export const closeEditor = () => {
    return {type: types.CANCEL_EDITOR}
}

export const saveEditor = () => {
    return {type: types.SAVE_EDITOR}
}