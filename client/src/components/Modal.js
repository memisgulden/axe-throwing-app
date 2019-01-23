import React from "react";
import {
  Modal, Button, FormControl, ControlLabel,
  FormGroup, Form, InputGroup
} from 'react-bootstrap';


class ModalContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setRedirect = this.handleClose.bind(this);

    this.state = {
      show: false,
      redirect: false,
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
        
        <Button bsSize="large" block onClick={this.handleShow}>
          Create New User
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <FormGroup >
                <ControlLabel>First Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Jane" />
              </FormGroup>{' '}

              <FormGroup >
                <ControlLabel>Last Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Doe" />
              </FormGroup>{' '}

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

              <FormGroup >
                <ControlLabel>Address</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

              <FormGroup >
                <ControlLabel>Address 2</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

              <FormGroup >
                <ControlLabel>City</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

              <FormGroup >
                <ControlLabel>State</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

              <FormGroup  >
                <ControlLabel>Zip Code</ControlLabel>{' '}
                <FormControl type="text" placeholder="" />
              </FormGroup>{' '}

            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button href="/game" bsStyle="primary" onClick={this.handleShow}>Submit</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    );
  }
}


export default ModalContainer;

