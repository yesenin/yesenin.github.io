import React, { Component } from 'react';

class Node extends Component {
    render() {
        let renderedNodes = this.props.item.children.map((node) => <Node key={node.title} item={node}/>);
        return <div className="node">{this.props.item.title}
        <div className="tree">{renderedNodes}</div></div>
    }
}

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: 'Corparative', children: []},
                { title: 'Private', children: [
                    { title: 'Family', children: []},
                    { title: 'Passwords', children: []}
                ]},
                { title: 'Other activities', children: []}
            ]
        }
    }

  render() {
    let renderedNodes = this.state.items.map((node) => <Node key={node.title} item={node}/>);
    return (
      <section><div className="tree">{renderedNodes}</div></section>
    );
  }
}

export default Tree;