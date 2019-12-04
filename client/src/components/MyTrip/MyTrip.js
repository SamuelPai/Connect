import React, { useState } from "react";
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
  Media,
  CardBody,
  CardSubtitle,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// import { Card, Button, CardTitle, CardText } from "reactstrap";



const MyTrip = props => {

  return (
    <div>
      <Container>

        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Title: {props.tripName}</CardTitle>
              <CardText>
                {props.description}
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
         




          <Col sm="6">
            {/* <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card> */}
          </Col>
          <Col sm="6">

          </Col>
          {/* <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col> */}


        </Row>
      </Container>
    </div>
  );
};

export default MyTrip;
