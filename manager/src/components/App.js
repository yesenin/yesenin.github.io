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

import { connect } from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearchOn: false
        }
        this.openSearch = this.openSearch.bind(this)
        this.closeSearch = this.closeSearch.bind(this)
    }
    openSearch() {
        this.setState({
            isSearchOn: true
        })
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
                            <b onClick={this.openSearch}>Search</b>
                        </div>
                        
                        {/* <Search /> */}
                        <NoteList/>
                    </div>
                    <div className="col">
                        <Editor/>
                    </div>
                </div>
                <NewSearch mode={this.state.isSearchOn} close={this.closeSearch}/>
                <Spinner mode={this.props.isRequesting} />
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            isRequesting: state.api.isRequesting,
        }
    },
    (dispatch) => {
        return {
            selectFolder: (id) => {
                dispatch(selectFolder(id));
                dispatch(selectNote(null));
            },
            loadFolders: () => loadFolders()
        }
    })(App)