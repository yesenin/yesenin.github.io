import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ReactAutocomplete from 'react-autocomplete'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
        this.onClick = this.onClick.bind(this)
        this.changeQuery = this.changeQuery.bind(this)
    }

    onClick() {
        this.props.changeMode(!this.props.isAdvanced)
    }

    changeQuery(value) {
        this.setState({query: value})
        this.props.changeQuery(value)
    }

    render() {
        return (
            <div className="search">
                <span onClick={this.onClick} className={"searchMode" + (this.props.isAdvanced ? " on" : "")}></span>
                <ReactAutocomplete
                    items={this.props.items}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                    }
                    value={this.state.query}
                    onChange={e => this.changeQuery(e.target.value)}
                    onSelect={value => this.changeQuery(value)}
                />
                
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => {
        return {
            isAdvanced: state.search.isAdvanced,
            items: Array.from(new Set(state.notes.list.map(x => x.title))).map(x => {return {id: x, label: x}})
        }
    },
    (dispatch) => {
        return  bindActionCreators(require('../actions/searchActions'), dispatch)
    })(Search)