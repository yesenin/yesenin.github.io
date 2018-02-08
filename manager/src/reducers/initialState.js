export default {
    folders: {
        list: [],
        selectedId: null
    },
    notes: {
        list: [],
        selectedId: null,
        search: {
            isOpen: false,
            isAdvanced: false,
            query: null,
            results: []
        }
    },
    editor: {
        note: null
    }, 
    api: {
        isRequesting: false
    },
    
}