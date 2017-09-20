import * as types from './actionTypes'
import NoteApi from '../api/mockNoteApi'

export const loadNotesSuccess = (notes) => {
    return {type: types.LOAD_NOTES_SUCCESS, notes}
}

export const addNoteSuccess = (note) => {
    return {type: types.ADD_NOTE_SUCCESS, note}
}

export const updateNoteSuccess = (note) => {
    return {type: types.UPDATE_NOTE_SUCCESS, note}
}

export const selectNote = (id) => {
    return {type: types.SELECT_NOTE, id}
}

export const editNote = (id) => {
    return {type: types.EDIT_NOTE, id}
}

export const loadNotes = () => {
    return (dispatch) => {
        return NoteApi.getAllNotes()
            .then(directories => {
                dispatch(loadNotesSuccess(directories))
            })
            .catch(error => {
                throw(error)
            })
    }
}

export const updateNote = (note) => {
    return (dispatch) => {
        return NoteApi.updateNote(note)
            .then(note => 
                dispatch(updateNoteSuccess(note))
            )
            .catch(error => {
                throw(error)
            })
    }
}

export const saveNote = (note) => {
    return (dispatch) => {
        return NoteApi.addNote(note)
            .then(note => 
                dispatch(addNoteSuccess(note))
            )
            .catch(error => {
                throw(error)
            })
    }
}