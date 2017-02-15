import React from 'react'

export class Menu extends React.Component {
    addFolder = (e) => {
        this.props.addFolder("New folder")
    }

    addItem = (e) => {
        this.props.addItem("New item")
    }

    render() {
        return <div>
            <button type="button" onClick={this.addFolder}>Add folder</button>
            <button type="button" onClick={this.addItem}>Add item</button>
        </div>
    }
}

export default Menu