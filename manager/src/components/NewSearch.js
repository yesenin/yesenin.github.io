import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Search from './Search'

class NewSearch extends Component {
    render() {
        return (
            <div className={"spinner" + (this.props.isOpen ? " on" : "")}>
                <b onClick={() => this.props.changeState(false)}>X</b>
                <Search />
                <ul>
                    {this.props.results.map(x => <li key={x.id}>{x.title}</li>)}
                </ul>
            </div>
        )
    }    
}

export default connect(
    (state, ownProps) => {
        return {
            isOpen: state.notes.search.isOpen,
            results: state.notes.search.results
        }
    },
    (dispatch) => {
        return  bindActionCreators(require('../actions/searchActions'), dispatch)
    })(NewSearch)