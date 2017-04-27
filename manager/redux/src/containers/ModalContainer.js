import React, { Component } from 'react'

import { connect } from 'react-redux'

class ModalContainer extends Component {
    render() {
        return <h1>{this.props.content}</h1>
    }
}

const mapStateToProps = (state) => ({
    content: state.modal.content
})

export default connect(mapStateToProps)(ModalContainer)
