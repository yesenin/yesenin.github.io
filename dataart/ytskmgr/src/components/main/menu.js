import React, { Component } from 'react';

class MenuItem extends Component {

  render() {
    return (<div className="menu-item" onClick={this.props.item.action}>{this.props.item.title}</div>);
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {title: 'AddFolder', action: this.addFolder},
        {title: 'AddNote', action: this.addNote},
        {title: 'Remove', action: this.remove}
      ]};
  }

  addFolder() {
    console.log("Add folder");
  }

  addNote() {
    console.log("Add note");
  }

  remove() {
    console.log("Remove");
  }

  render() {
    let renderedItems = this.state.items.map((item) => <MenuItem key={item.title} item={item} />);
    return (
      <aside>{renderedItems}</aside>
    );
  }
}

export default Menu;