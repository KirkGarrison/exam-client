import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class NewCharacterForm extends Component {

  handleSubmit = (e) => {
    const name = e.target.name.value;
    const birth_year = e.target.birth_year.value;
    const height = e.target.height.value;
    const eye_color = e.target.eye_color.value;
    const hair_color = e.target.hair_color.value;
    const notes = e.target.notes.value;
    this.props.postCharacters({name, birth_year, height, eye_color, hair_color, notes});
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="BB220" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="birth_year">
          <Form.Label>Birth Year</Form.Label>
          <Form.Control type="text" placeholder="1981" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="height">
          <Form.Label>Height</Form.Label>
          <Form.Control type="text" placeholder={`4'11"`} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="eye_color">
          <Form.Label>Eye Color</Form.Label>
          <Form.Control type="text" placeholder="blue" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hair_color">
          <Form.Label>Hair Color</Form.Label>
          <Form.Control type="text" placeholder="silver" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="super cool character" />
        </Form.Group>
        <Button type="submit">Create Character</Button>
      </Form>
    )
  }
}
