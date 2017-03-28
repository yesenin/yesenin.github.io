import React from 'react'

class Counter extends React.Component {
    render() {
        return <li>1</li>
        /*<li>
            {this.props.counter.value} ({this.props.counter.id})
        </li>*/
    }
}

export class List extends React.Component {
    render() {
        return <div><span>{this.props.counters.length}</span><ul>{this.props.counters.map((counter) => <Counter key={counter.id} counter={counter}/>)}</ul></div>
    }
}

export default List