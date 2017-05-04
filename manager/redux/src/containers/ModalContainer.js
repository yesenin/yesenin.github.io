import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

import { Modal, Button } from 'react-bootstrap'

const Tag = ({ tag }) => {
    return <span className='tag'>{tag}</span>
}

const Note = ({ item }) => {
    return <div>
        <h2>Title</h2><input type='text' defaultValue={item.title} />
        <h2>Description</h2><textarea cols='70' rows='5' defaultValue={item.description} />
        <h2>Tags</h2><p>{item.tags.map((tag) => <Tag key={tag} tag={tag} />)}</p>
        <h2>Add tag</h2><input type='text' />
    </div>
}

class ModalContainer extends Component {
    titleChange(e) {
        this.props.content.title = e.target.value
    }
    descriptionChange(e) {
        this.props.content.description = e.target.value
    }
    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Body>
                    <div>
                        <h2>Title</h2><input name='title' onChange={this.titleChange.bind(this)} type='text' defaultValue={this.props.content.title} />
                        <h2>Description</h2><textarea name='description' onChange={this.descriptionChange.bind(this)} cols='70' rows='5' defaultValue={this.props.content.description} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.apiDeleteNote(this.props.id)}>Delete</Button>
                    <Button onClick={() => this.props.mode === 'NEW' 
                        ? this.props.apiAddNote1(this.props.parent, this.props.content)
                        : this.props.apiUpdateNote(this.props.id, this.props.parent, this.props.content)}>Save</Button>
                    <Button onClick={this.props.closeModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.modal.isOpen,
    mode: state.modal.mode,
    id: state.modal.id,
    content: state.modal.content,
    parent: state.tree.selectedFolder,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
