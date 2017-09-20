import { delay } from './delay'
import { next } from './idGenerator'

let directories = [
    {
        id: next(),
        name: 'root',
        parentId: null
    }
]

class DirectoryApi {
    static getAllDirectories = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], directories))
            }, delay)
        })
    }

    static addDirectory = (directory) => {
        directory = Object.assign({}, directory)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                directory.id = next()
                directories.push(directory)
                resolve(directory)
            }, delay)
        })
    }

    static updateDirectory = (directory) => {
        directory = Object.assign({}, directory)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                directories = directories.filter(item => { return item.id === directory.id ? directory : item})
                resolve(directory)
            }, delay)
        })
    }

    static deleteDirectory = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = directories.findIndex(a => a.id === id);
                directories.splice(index, 1);
                resolve(id)
            }, delay)
        })
    }
}

export default DirectoryApi