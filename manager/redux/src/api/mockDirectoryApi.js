import delay from './delay'

let id = 0

const next = () => {
    return ++id
}

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
}

export default DirectoryApi