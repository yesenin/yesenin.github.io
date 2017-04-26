import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TreeItem from '../components/TreeItem'
import TreeItemHierarchy from '../components/TreeItemHierarchy'

class TreeContainer extends Component {
    innerAddFolder = () => {
        this.props.addFolder(this.props.selectedId)
    }

    innerAddNote = () => {
        this.props.addNote(this.props.selectedId)
    }

    innerSelectItem = (id) => {
        this.props.selectItem(id)
    }

    innerRemoveItem = () => {
        let item = this.props.folders.filter(i => i.id === this.props.selectedId)[0]
        if (item.parent !== undefined) {
            this.props.removeItem(this.props.selectedId, item.parent)
        }    
    }

    render() {
        const renderedItems = this.props.folders.map((item) => {
            return <TreeItem key={item.id} item={item} selected={item.id === this.props.selectedId} foo={this.innerSelectItem}/>
        })
        const renderedNotes = this.props.notes.map((item) => {
            return <li key={item.id}>{item.name}</li>
        })
        return (
            <div>
                <div>
                    <button onClick={this.innerAddFolder}>Add folder</button>
                    <button onClick={this.innerAddNote}>Add note</button>
                    <button onClick={this.innerRemoveItem}>Remove item</button>
                    <ul>{renderedItems}</ul>
                    <ul>{renderedNotes}</ul>
                </div>
                <div className="tree">
                    <TreeItemHierarchy items={this.props.hierarchy}/>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        selectedId: state.selectedId,
        folders: state.folders,
        notes: state.notes.filter(i => i.parent === state.selectedId),
        hierarchy: state.folders.filter(i => i.id === 0)
    }
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)