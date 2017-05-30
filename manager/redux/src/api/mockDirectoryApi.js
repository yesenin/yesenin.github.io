import delay from './delay'
import { next } from './idGenerator'

const directories = [
    {
        id: next(),
        name: 'root'
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
                if (directory.id) {
                    const index = directories.findIndex(a => a.id === directory.id);
                    directories.splice(index, 1, directory);
                } else {
                    directory.id = next()
                    directories.push(directory)
                }
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