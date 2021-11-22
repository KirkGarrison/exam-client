import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }
  // TODO: write a function that make a request to get characters from the server and then somehow renders them to the screen... see Characters component for ideas on how to render
  // TODO: write a function that make a request to post, allows you to add a brand new character of your creation to your list of characters - use the NewCharacterForm component to help facilitate that either by putting it in a modal or by using a router
  // TODO: write a function that make a request to put, to update a character with notes
  // TODO: write a function that make a request to delete characters

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

