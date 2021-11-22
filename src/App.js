import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  // write a route that gets characters from the server and then somehow renders them to the screen... see Characters component for ideas on how to render
  // write a route that allows you to add a brand new character of your creation to your list of characters - use the NewCharacterForm component to help facilitate that either by putting it in a modal or by using a router
  // write a route that allows you to update a character with notes
  // write a route that allows you to delete characters
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

