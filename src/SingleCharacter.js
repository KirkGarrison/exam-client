import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';


export default class SingleCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }
  // once you have this component rendering make the buttons work
  // delete should delete a character
  // and new notes should allow you to update a character with notes... see the UpdateForm component

  // once everything works change this component into a nicer looking bootstrap react component

  openForm = () => {
    this.setState({ showForm: true })
  }

  closeForm = () => {
    this.setState({ showForm: true })
  }

  render() {
    return (
      <div>
        <h3>{this.props.character.name}</h3>
        <ul>
          <li>height: {this.props.character.height}</li>
          <li>birth year: {this.props.character.birth_year}</li>
          <li>hair color: {this.props.character.hair_color}</li>
          <li>eye color: {this.props.character.eye_color}</li>
          <li>notes: {this.props.character.notes}</li>
        </ul>
        <button onClick={(this.openForm)}>Add new notes</button>
        <button onClick={() => this.props.deleteCharacters(this.props.character._id)}>Delete character</button>
        <UpdateForm showForm={this.state.showForm} closeForm={this.closeForm} putCharacters={this.props.putCharacters} character={this.props.character}/>
      </div>
    )
  }
}
