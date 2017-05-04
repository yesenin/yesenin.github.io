import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

import { Modal, Button } from 'react-bootstrap'

class ModalContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tags: nextProps.content.tags
        })
    }

    titleChange(e) {
        this.props.content.title = e.target.value
    }
    descriptionChange(e) {
        this.props.content.description = e.target.value
    }
    handleTags(e) {
        if (e.keyCode === 32) {
            if (this.state.tags.indexOf(e.target.value.trim()) < 0) {
                this.setState({
                    tags: [ ...this.state.tags, e.target.value.trim()]
                })
            }    
            e.target.value = ''
        }
    }
    deleteTag(tag) {
        this.setState({
            tags: this.state.tags.filter(t => t !== tag)
        })
    }

    foo() {
        this.props.content.tags = this.state.tags
        if (this.props.mode === 'NEW') {
            this.props.apiAddNote1(this.props.parent, this.props.content)
        } else {
            this.props.apiUpdateNote(this.props.id, this.props.parent, this.props.content)
        }
    }
    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Body>
                    <div>
                        Position: {this.props.content.position}
                        <h2>Title</h2><input name='title' onChange={this.titleChange.bind(this)} type='text' defaultValue={this.props.content.title} />
                        <h2>Description</h2><textarea name='description' onChange={this.descriptionChange.bind(this)} cols='70' rows='5' defaultValue={this.props.content.description} />
                        <h2>Tags</h2>
                        <div>
                            <div className='tagInput'>
                                <input type="text" onKeyUp={this.handleTags.bind(this)} />
                            </div>    
                            <div>
                                {this.state.tags.map(t => <span key={t} className='tag'>{t}<span className='delete' onClick={() => this.deleteTag(t)}>x</span></span>)}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.apiDeleteNote(this.props.id)}>Delete</Button>
                    <Button onClick={this.foo.bind(this)}>Save</Button>
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
