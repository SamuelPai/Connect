import React from "react";
import "./MyTrip.css";

import {
  Container,
  Row,
  Col,
  Button,
  CardTitle,
  CardText,
  Card,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Media
} from "reactstrap";
// import { Card, Button, CardTitle, CardText } from "reactstrap";

const MyTrip = props => {
  return (
    <div>
      <Container>
        <Row>
          <Button color="primary" href="./Trip">
            <Col md={4}>CreateTrip</Col>
          </Button>
          <Button outline color="success">
            <Col md={6}> MY TRIP</Col>
          </Button>
        </Row>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="3">
            <FormGroup>
              <Label for="exampleText"> Description venu:</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
          <Col sm="3">
            <FormGroup>
              <Label for="exampleText"> Who is coming</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card AddDestination>
              <Container fluid>
                <Label for="exampleText"> Add Destination</Label>
                <Col sm="7">
                  <Input type="textarea" name="text" id="exampleText" />
                </Col>
                <Col sm="7">
                  <Input type="textarea" name="text" id="exampleText" />
                </Col>
                <Col sm="7">
                  <Input type="textarea" name="text" id="exampleText" />
                </Col>
              </Container>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="2">
            <Button color="primary" href="./CreateActivity" size="lg">
              <Col md={4}>CreateActivity</Col>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyTrip;
