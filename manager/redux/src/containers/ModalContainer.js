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
    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Body>
                    {this.props.foo ? <Note item={this.props.foo}/> : <div></div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.apiDeleteNote(this.props.id)}>Delete</Button>
                    <Button onClick={() => this.props.apiUpdateNote(this.props.id, 1)}>Save</Button>
                    <Button onClick={this.props.closeModal}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpen: state.modal.isOpen,
    id: state.modal.id,
    content: state.modal.content,
    foo: state.tree.notes.filter((i) => i.id === state.tree.selectedNote)[0]
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
