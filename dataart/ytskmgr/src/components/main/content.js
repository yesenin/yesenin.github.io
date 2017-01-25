import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <aside><input type="text" placeholder="Search"/></aside>
            );
    }
}

class Note extends Component {
    render() {
        return (
            <div className="note">{this.props.item}</div>
        );
    }
}

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ['Foo', 'Bar']
        };
    }
    render() {
        const renderedNotes = this.state.notes.map((note) => <Note key={note} item={note} />);
        return (
            <div>{renderedNotes}</div>
        );
    }
}

class Content extends Component {
  render() {
    return (
      <section><Search /><NotesList /></section>
    );
  }
}

export default Content;