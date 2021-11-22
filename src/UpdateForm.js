import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class UpdateForm extends Component {
  // this modal should take notes about the character and update the character with the notes... you can rework this component if you want to, just get it to work.

  handleClick = () => {
    // this should update your character with the notes
  }
  render() {
    return (
      <Modal show={this.props.showForm} onHide={this.props.closeForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="notes">
              <Form.Label>Character Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClick}>
            Update Notes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
