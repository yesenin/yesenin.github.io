import * as types from './actionTypes'
import NoteApi from '../api/mockNoteApi'

export const loadNotesSuccess = (notes) => {
    return {type: types.LOAD_NOTES_SUCCESS, notes}
}

export const addNoteSuccess = (note) => {
    return {type: types.ADD_NOTE_SUCCESS, note}
}

export const selectNote = (id) => {
    return {type: types.SELECT_NOTE, id}
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