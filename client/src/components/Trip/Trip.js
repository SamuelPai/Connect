
import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
// import NavBar from "../NavBar/Navbar";

const Trip = (props) => {
  return (
    <Container>
        <Row>
          <Col xs="5" sm="7">
            
            <FormGroup>
            <div>
          <Jumbotron TripName>
          <Container fluid>
          <Label for="exampleText"> Add Destination</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </Container>
          </Jumbotron>
            </div>
          <Jumbotron TripName>
          <Container fluid>
          <Label for="exampleText"> Date Time</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </Container>
          </Jumbotron>
              {/* <Label for="exampleText"> Destination</Label>
              <Input type="textarea" name="text" id="exampleText" /> */}
            </FormGroup>
          </Col>
          <Col xs="6" sm="5">
            <FormGroup>
              <Label for="exampleText"> Invite</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
        
          </Col>
        </Row>
      </Container>
  );
}

export default Trip;