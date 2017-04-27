import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TreeItem from '../components/TreeItem'
import NoteList from '../components/NoteList'

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
        if (this.props.selectedNote !== null) {
            this.props.removeItem(this.props.selectedNote, this.props.selectedId)
        } else {
            let item = this.props.folders.filter(i => i.id === this.props.selectedId)[0]
            if (item.parent !== null) {
                this.props.removeItem(this.props.selectedId, item.parent)
            }
        }    
    }

    innerSelectNote = (id) => {
        this.props.selectNote(id)
    }

    innerDoubleClick(id) {
        if (this.props.selectedNote !== id) { 
            this.props.selectNote(id)
        } else {
            this.props.toggleEditNote(true, id)
        }
    }

    handleChange(id, event) {
        this.props.renameNote(id, event.target.value)  
    }

    handleChange1(event) {
        if (event.key === 'Enter' || event.keyCode === 27) {
            this.props.toggleEditNote(false, null)
        }    
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='menu'>
                    <div className='menuItem' onClick={this.innerAddFolder} title="Add folder">
                        <div className='icon'></div>
                        <span className='text'>Add folder</span></div>
                    <div className='menuItem' onClick={this.innerAddNote} title="Add note">
                        <div className='icon'></div>
                        <span className='text'>Add note</span></div>
                    <div className='menuItem' onClick={this.innerRemoveItem} title="Remove">
                        <div className='icon'></div>
                        <span className='text'>Remove</span></div>
                    
                </div>
                <div className="tree">
                    <TreeItem id={this.props.root} items={this.props.folders} 
                    selectedId={this.props.selectedId} foo={this.innerSelectItem}
                    editableId={this.props.editableId} bar={this.props.toggleEdit} rename={this.props.rename}/>
                </div>
                <div className='notes'>
                    <div className='search'>Search</div>
                    <NoteList items={this.props.notes} />
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        root: null,
        selectedId: state.tree.selectedId,
        selectedNote: state.tree.selectedNote,
        editableId: state.tree.editableId,
        editableNote: state.tree.editableNote,    
        folders: state.tree.folders,
        notes: state.tree.notes.filter(i => i.parent === state.tree.selectedId)
    }
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)