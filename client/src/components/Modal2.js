import React from "react";
import {
  Modal, Button, FormControl, ControlLabel,
  FormGroup, Form, InputGroup
} from 'react-bootstrap';

class ModalContainer2 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {


    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Previous User
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <FormGroup >
                <ControlLabel>Emaill</ControlLabel>{' '}
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="text" />
                </InputGroup>
              </FormGroup>{' '}

              <FormGroup >
                <ControlLabel>Password</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default ModalContainer2;
