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
  Input
} from "reactstrap";
// import { Card, Button, CardTitle, CardText } from "reactstrap";

const MyTrip = props => {
  return (
    <div>
      <Container>
        <Row>
          <Button color="primary">
            <Col md={4}>CreateTrip</Col>
          </Button>
          <Button outline color="success">
            <Col md={6}> MY TRIP</Col>
          </Button>
        </Row>
        <Row>
          <Col sm="4">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label for="exampleText"> Description venu:</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label for="exampleText"> Who is coming</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Col>
          <Col xs="12" sm="12">
            <Card body className="text-center">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col xs="12" sm="12">
            <Card body className="text-right">
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyTrip;
