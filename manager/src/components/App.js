import React, { Component } from 'react'

import Search from './Search'
import Menu from './Menu'
import Tree from './Tree'
import NoteList from './NoteList'
import Editor from './Editor'
import Spinner from './Spinner'
import NewSearch from './NewSearch'

import { selectFolder, loadFolders } from '../actions/folderActions'
import { selectNote } from '../actions/noteAction'
import { changeState } from '../actions/searchActions'

import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearchOn: false
        }
        this.closeSearch = this.closeSearch.bind(this)
    }

    closeSearch() {
        this.setState({
            isSearchOn: false
        })
    }
    render() {
        return (
            <div>
                <div className="manager">
                    <div className="col">
                        <Menu/>
                        <Tree/>
                    </div>
                    <div className="col">
                        <div>
                            <b onClick={() => this.props.changeState(true)}>Search</b>
                        </div>
                        <NoteList/>
                    </div>
                    <div className="col">
                        <Editor/>
                    </div>
                </div>
                <NewSearch/>
                <Spinner mode={this.props.isRequesting} />
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            isRequesting: state.api.isRequesting,
            isOpen: state.notes.search.isOpen
        }
    },
    (dispatch) => {
        return {
            selectFolder: (id) => {
                dispatch(selectFolder(id));
                dispatch(selectNote(null));
            },
            changeState: (isOpen) => dispatch(changeState(isOpen))
        }
    })(App)