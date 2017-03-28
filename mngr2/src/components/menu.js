import React from 'react'

export class Menu extends React.Component {
    clickHandler = () => {
        this.props.addCounter()
    }
    render() {
        return <div>
            <button type="button" onClick={this.clickHandler}>Add counter</button>
            <button type="button">Increment</button>
        </div>
    }
}

export default Menu