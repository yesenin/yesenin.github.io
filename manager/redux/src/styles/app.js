export default {
    wrapper: {
        fontFamily: 'serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
    },
    header: {
        textAlign: 'center',
        margin: '10px 0'
    },
    main: {
        display: 'flex',
        flex: '1 0 auto',
        flexDirection: 'column'
    },
    content: {
        padding: '20px 10px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'stretch'
    },
    menu: {
        marginLeft: '10px',
        fontFamily: 'serif',
        fontSize: '14pt'
    },
    menuItem: {
        margin: '5px',
        textDecoration: 'underline'
    },
    tree: {
        backgroundColor: 'lightgrey',
        width: '200px',
        overflow: 'overlay-y',
        height: '100%',
        fontSize: '14pt'
    },
    ul: {
        paddingLeft: '10px',
        listStyle: 'none'
    },
    notes: {
        width: '100%'
    },
    footer: {
        fontFamily: 'serif',
        fontSize: '12pt',
        borderTop: '1px solid black',
        width: '100%',
        height: '40px',
        padding: '10px 5px'
    }
}