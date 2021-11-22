import React, { Component } from 'react'

export default class Characters extends Component {
  //this component maps through your characters and uses a SingleCharacter component
  render() {
    return (
      <div>
        {this.props.characters.length === 0 ? <p>sorry no characters</p> : <p>map through the characters</p>}
      </div>
    )
  }
}
