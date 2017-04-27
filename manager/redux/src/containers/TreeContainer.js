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
        if (this.props.selectNote !== null) {
            this.props.removeItem(this.props.selectNote, this.props.selectedId)
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
            console.log('edit ' + id)
        }
    }

    render() {
        const renderedNotes = this.props.notes.map((item) => {
            return <div className={this.props.selectedNote === item.id ? 'note selected' : 'note'} 
            key={item.id} onClick={() => this.innerSelectNote(item.id)}
            onDoubleClick={() => this.innerDoubleClick(item.id)}>
                <div className='icon'></div>
                <span className='text'>{item.name}</span></div>
        })
        return (
            <div className='wrapper'>
                <div className='menu'>
                    <div className='menuItem' onClick={this.innerAddFolder}>
                        <div className='icon'></div>
                        <span className='text'>Add folder</span></div>
                    <div className='menuItem' onClick={this.innerAddNote}>
                        <div className='icon'></div>
                        <span className='text'>Add note</span></div>
                    <div className='menuItem' onClick={this.innerRemoveItem}>
                        <div className='icon'></div>
                        <span className='text'>Remove item</span></div>
                    
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
        folders: state.folders,
        notes: state.notes.filter(i => i.parent === state.selectedId),
        hierarchy: state.folders.filter(i => i.id === 0)
    }
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)