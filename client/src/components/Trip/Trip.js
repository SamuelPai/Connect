
import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
// import NavBar from "../NavBar/Navbar";

const Trip = (props) => {
  return (
    <Container>
        <Row>
          <Col xs="5" sm="7">
            
            <FormGroup>
            <div>
            <Jumbotron Title>
          <Container fluid>
          <Label for="exampleText"> Title</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </Container>
          </Jumbotron>
          <Jumbotron AddDestination>
          <Container fluid>
          <Label for="exampleText"> Add Destination</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </Container>
          </Jumbotron>
            </div>
          <Jumbotron DateTime>
          <Container fluid>
          <Label for="exampleText"> Date Time</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </Container>
          </Jumbotron>
          
            </FormGroup>
          </Col>
          <Col xs="6" sm="5">
            <FormGroup>
            <div>
        <Card body>
          <CardTitle>Write Invite</CardTitle>
          <Input type="textarea" name="text" id="exampleText" />

          <Button>Send Invite</Button>
        </Card>
      
            <Button color="primary" size="lg" active>Share</Button>{' '}
            <Button color="primary" size="lg" active>Submit</Button>{' '}

             </div>
            </FormGroup>
        
          </Col>
        </Row>
      </Container>
  );
}

export default Trip;