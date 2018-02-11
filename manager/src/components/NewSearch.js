import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Search from './Search'

class NewSearch extends Component {
    render() {
        return (
            <div className={"overlay" + (this.props.isOpen ? " on" : "")}>
                <div className="search-container">
                    <Search/>
                    <div className="search-results">
                        <ul>
                            {this.props.results.map(x => <li key={x.id}><Link to={`/${x.directoryId}/${x.id}`}>{x.title}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }    
}

export default connect(
    (state, ownProps) => {
        return {
            isOpen: state.search.isOpen,
            results: state.notes.searchResult
        }
    },
    (dispatch) => {
        return  bindActionCreators(require('../actions/searchActions'), dispatch)
    })(NewSearch)