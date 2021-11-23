import React, { Component } from 'react'
import SingleCharacter from './SingleCharacter'


export default class Characters extends Component {
  //this component maps through your characters and uses a SingleCharacter component
  render() {
    return (
      <div>
        {this.props.characters.length === 0 ? <p>sorry no characters</p> : this.props.characters.map(character => <SingleCharacter character={character} deleteCharacters={this.props.deleteCharacters} putCharacters={this.props.putCharacters} />)}
      </div>
    )
  }
}
