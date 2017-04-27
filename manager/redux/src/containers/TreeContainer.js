import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
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
        const renderedNotes = this.props.notes.map((item) => {
            return <div className={this.props.selectedNote === item.id ? 'note selected' : 'note'} 
            key={item.id} onClick={() => this.innerSelectNote(item.id)}
            onDoubleClick={() => this.innerDoubleClick(item.id)} title={item.name}>
                <div className='icon'></div>
                { this.props.editableNote === item.id
                    ? <input type='text' defaultValue={item.name}
                        onKeyPress={this.handleChange1.bind(this)}    
                        onKeyUp={this.handleChange.bind(this, item.id)} />
                    : <span className='text'>{item.name}</span>}
                </div>
        })
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
                    <TreeItemHierarchy id={this.props.root} items={this.props.folders} 
                    selectedId={this.props.selectedId} foo={this.innerSelectItem}
                    editableId={this.props.editableId} bar={this.props.toggleEdit} rename={this.props.rename}/>
                </div>
                <div className='notes'>
                    <div className='search'>Search</div>
                    <div className='list'>
                        {renderedNotes}
                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => (
    {
        root: null,
        selectedId: state.selectedId,
        selectedNote: state.selectedNote,
        editableId: state.editableId,
        editableNote: state.editableNote,    
        folders: state.folders,
        notes: state.notes.filter(i => i.parent === state.selectedId),
        hierarchy: state.folders.filter(i => i.id === 0)
    }
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)