import React, { Component } from 'react'
import { connect } from 'react-redux'

import Folder from './Folder'

class Tree extends Component {
    render() {
        return (
            <ul>
                {this.props.folders.map(x => <Folder key={x.id} folder={x} />)}
            </ul>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            folders: state.folders.list.filter(x => x.parentId === ownProps.parentId)
        }
    },
    (dispatch) => {
        return {}
    })(Tree)