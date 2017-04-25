import tree from './tree'

describe('Tree Test', () => {
    it('Only root', () => {
        expect(tree(undefined, {})).toEqual({
            lastId: 0,
            selectedId: 0,
            folders: [{name: 'root', id: 0}],
            notes: []
        })
    })

    it('Add folder', () => {
        expect(tree(undefined, {type: 'ADD_FOLDER', name: 'new folder', parent: 0})).toEqual({
            lastId: 1,
            selectedId: 0,
            folders: [
                {name: 'root', id: 0},
                {name: 'new folder', id: 1, parent: 0}
            ],
            notes: []
        })
    })

    it('Add two folders', () => {
        let t = tree(undefined, {})
        t = tree(t, {type: 'ADD_FOLDER', name: '1', parent: 0})
        t = tree(t, {type: 'ADD_FOLDER', name: '2', parent: 0})
        expect(t).toEqual({
            lastId: 2,
            selectedId: 0,
            folders: [
                {name: 'root', id: 0},
                {name: '1', id: 1, parent: 0},
                {name: '2', id: 2, parent: 0}
            ],
            notes: []
        })
    })

    it('Add two and remove one', () => {
        let t = tree(undefined, {})
        t = tree(t, {type: 'ADD_FOLDER', name: '1', parent: 0})
        t = tree(t, {type: 'ADD_FOLDER', name: '2', parent: 0})
        t = tree(t, {type: 'REMOVE_ITEM', id: 1, parentId: 0})
        expect(t).toEqual({
            lastId: 2,
            selectedId: 0,
            folders: [
                {name: 'root', id: 0},
                {name: '2', id: 2, parent: 0}
            ],
            notes: []
        })
    })

    it('Add one and one more', () => {
        let t = tree(undefined, {})
        t = tree(t, {type: 'ADD_FOLDER', name: '1', parent: 0})
        t = tree(t, {type: 'ADD_FOLDER', name: '2', parent: 1})
        expect(t).toEqual({
            lastId: 2,
            selectedId: 0,
            folders: [
                {name: 'root', id: 0},
                {name: '1', id: 1, parent: 0},
                {name: '2', id: 2, parent: 1}
            ],
            notes: []
        })
    })
    
    it('Wrong parent', () => {
        let t = tree(undefined, {})
        t = tree(t, {type: 'ADD_FOLDER', name: '1', parent: 0})
        t = tree(t, {type: 'ADD_FOLDER', name: '2', parent: 2})
        expect(t).toEqual({
            lastId: 2,
            selectedId: 0,
            folders: [
                {name: 'root', id: 0},
                {name: '1', id: 1, parent: 0},
                {name: '2', id: 2, parent: 0}
            ],
            notes: []
        })
    })

    it('Add note', () => {
        let t = tree(undefined, {})
        t = tree(t, {type:'ADD_NOTE', name: 'note_1', parent: 0})
        expect(t).toEqual({
            lastId: 1,
            selectedId: 0,
            folders: [{name: 'root', id: 0}],
            notes: [{name: 'note_1', id: 1, parent: 0}]
        })
    })

    it('Remove note', () => {
        let t = tree(undefined, {})
        t = tree(t, {type:'ADD_NOTE', name: 'note_1', parent: 0})
        t = tree(t, {type:'REMOVE_ITEM', id: 1, parentId: 0})
        expect(t).toEqual({
            lastId: 1,
            selectedId: 0,
            folders: [{name: 'root', id: 0}],
            notes: []
        })
    })

    it('Add folder and select', () => {
        let t = tree(undefined, { type: 'ADD_FOLDER', name: 'new folder', parent: 0 })
        t = tree(t, { type: 'SELECT_ITEM', id: 1 })
        expect(t).toEqual({
            lastId: 1,
            selectedId: 1,
            folders: [
                {name: 'root', id: 0},
                {name: 'new folder', id: 1, parent: 0}
            ],
            notes: []
        })
    })
})