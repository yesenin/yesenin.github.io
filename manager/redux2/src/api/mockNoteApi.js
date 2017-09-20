import delay from './delay'
import { next } from './idGenerator'

const notes = []

class NoteApi {
    static getAllNotes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], notes))
            }, delay)
        })
    }

    static addNote = (note) => {
        note = Object.assign({}, note)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                note.id = next()
                notes.push(note)
                resolve(note)
            }, delay)
        })
    }
}

export default NoteApi