export default {
    folders: {
        list: [],
        selected: null,
        selectedId: null
    },
    notes: {
        list: [],
        selected: null,
        selectedId: null,
        suggestions: [],
        searchResult: []
    },
    editor: {
        note: null
    }, 
    api: {
        isRequesting: false
    },
    search: {
        isOpen: false,
        isAdvanced: false,
        query: ''
    }
}