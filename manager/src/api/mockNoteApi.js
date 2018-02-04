import { delay } from './delay'
import { next } from './idGenerator'

let notes = [
    { id: next(), title: "Note one", tags: ["one", "two"], message: ["One two"], directoryId: 1},
    { id: next(), title: "Note two", tags: ["one", "two"], message: ["three four"], directoryId: 1},
    { id: next(), title: "Note one", tags: ["one", "two"], message: ["five six"], directoryId: 2},
    { id: next(), title: "Note two", tags: ["one", "two"], message: ["seven eight"], directoryId: 2},
    { id: next(), title: "Note twone", tags: ["one", "two"], message: ["9 10 eleven"], directoryId: 2}
]

class NotesApi {
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

    static updateNote = (note) => {
        note = Object.assign({}, note)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                notes = notes.filter(item => { return item.id === note.id ? note : item})
                resolve(note)
            }, delay)
        })
    }
}

export default NotesApi