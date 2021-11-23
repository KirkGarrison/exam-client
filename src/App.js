import React, { Component } from 'react';
import axios from 'axios';
import NewCharacterForm from './NewCharacterForm';
// import UpdateForm from './UpdateForm';
// import SingleCharacter from './SingleCharacter';
import Characters from './Characters.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  getCharacters = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/characters`
    let response = await axios.get(url);
    this.setState({ characters: response.data })
  }

  postCharacters = async (newCharacterObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/characters`
    let response = await axios.post(url, newCharacterObj);
    this.setState({ characters: [...this.state.characters, response.data] });
    console.log(this.state.characters);

  }

  putCharacters = async (id, updateCharacterObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/characters/${id}`
    try {
      let results = await axios.put(url, updateCharacterObj);
      let filteredCharacters = this.state.characters.filter(character => character._id !== id);
      this.setState({ characters: filteredCharacters });
      let updatedCharacterArr = [...this.state.characters, results.data]
      this.setState ({ characters: updatedCharacterArr});
    } catch (e) {
      console.error(e);
    }
  }

  deleteCharacters = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/characters/${id}`
    await axios.delete(url);
    let filteredCharacters = this.state.characters.filter(character => character._id !== id);
    this.setState ({ characters: filteredCharacters });
  }

  componentDidMount() {
    this.getCharacters();
  }
  // TODO: write a function that make a request to get characters from the server and then somehow renders them to the screen... see Characters component for ideas on how to render
  // TODO: write a function that make a request to post, allows you to add a brand new character of your creation to your list of characters - use the NewCharacterForm component to help facilitate that either by putting it in a modal or by using a router
  // TODO: write a function that make a request to put, to update a character with notes
  // TODO: write a function that make a request to delete characters

  render() {
    console.log(this.state.characters);
    return (
      <>
      <div>
        <NewCharacterForm postCharacters={this.postCharacters}/>
        {/* <UpdateForm putCharacters={this.putCharacters} characters={this.state.characters}/> */}
        <Characters characters={this.state.characters} deleteCharacters={this.deleteCharacters} putCharacters={this.putCharacters}/>
      </div>
      </>
    )
  }
}

