import * as types from './actionTypes'
import NoticesApi from '../api/noticesApi'
import { apiRequest, apiOk } from './apiActions'

export const selectNote = (id) => {
    return {
        type: types.SELECT_NOTE,
        id
    }
}

const loadNotesOk = (data) => {
    return {
        type: types.LOAD_NOTES,
        data
    }
}

const updateNoteOk = (data) => {
    return {
        type: types.UPDATE_NOTE,
        data
    }
}

export const update = (note) => {
    return (dispatch) => {
        dispatch(apiRequest());
        return NoticesApi.update(note)
            .then(data => {
                dispatch(apiOk())
                dispatch(updateNoteOk(data))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export const loadNotes = () => {
    return (dispatch) => {
        dispatch(apiRequest());
        return NoticesApi.getAll()
            .then(data => {
                dispatch(apiOk())
                dispatch(loadNotesOk(data))
            })
            .catch(error => {
                throw(error)
            })
    }
}