import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import ReactAutocomplete from 'react-autocomplete'

import MenuItem from './MenuItem'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: this.props.query
        }
        this.onClick = this.onClick.bind(this)
        this.changeQuery = this.changeQuery.bind(this)
        this.closeSearch = this.closeSearch.bind(this)
    }

    onClick() {
        if (this.props.isAdvanced) {
            this.props.history.push(`/search?q=${this.props.query}`)
        } else {
            this.props.history.push(`/advanced_search?q=${this.props.query}`)
        }
    }

    closeSearch() {
        this.props.changeQuery('', this.props.isAdvanced)
        this.props.changeState(false)
        this.props.history.push('/')
    }

    changeQuery(value) {
        if (this.props.isAdvanced) {
            this.props.history.push(`/advanced_search?q=${value}`)
        } else {
            this.props.history.push(`/search?q=${value}`)
        }
    }

    render() {
        return (
            <div className="search">
                <span
                    onClick={this.onClick}
                    className={"searchMode" + (this.props.isAdvanced ? " on" : "")}
                    title="Toggle search mode"></span>
                <ReactAutocomplete
                    wrapperStyle={{width: 500, display: 'inline-block'}}
                    menuStyle={
                        {backgroundColor: 'white',
                        color: 'black',
                        position: 'fixed',
                        overflow: 'auto',
                        cursor: 'pointer'}
                    }
                    items={this.props.suggestions}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{
                                backgroundColor: highlighted ? 'black' : 'transparent',
                                color: highlighted ? 'white' : 'black'
                            }}
                        >
                            {item.label}
                        </div>
                    }
                    value={this.props.query}
                    onChange={e => this.changeQuery(e.target.value)}
                    onSelect={value => this.changeQuery(value)}
                />
                <MenuItem onClickHandler={() => this.closeSearch()}
                    title="Close search popup">Close</MenuItem>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            query: state.search.query,
            isAdvanced: state.search.isAdvanced,
            suggestions: state.notes.suggestions
        }
    },
    (dispatch) => {
        return  bindActionCreators(require('../actions/searchActions'), dispatch)
    })(withRouter(Search))