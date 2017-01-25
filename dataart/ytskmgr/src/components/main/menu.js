import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (<div className="menu-item">{this.props.item}</div>);
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['AddFolder', 'AddNote', 'Remove']
    };
  }

  render() {
    let renderedItems = this.state.items.map((item) => <MenuItem key={item} item={item} />);
    return (
      <aside>{renderedItems}</aside>
    );
  }
}

export default Menu;