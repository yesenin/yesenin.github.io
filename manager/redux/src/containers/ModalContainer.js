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
        <h2>Name</h2><input type='text' defaultValue={item.name} />
        <h2>Body</h2><textarea cols='70' rows='5' defaultValue={item.body} />
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
                    <Button onClick={() => this.props.removeItem(this.props.id, null)}>Delete</Button>
                    <Button onClick={() => this.props.updateNote(this.props.id, Date.now(), Date.now(), [Date.now()])}>Save</Button>
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
