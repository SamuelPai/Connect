import React from "react";
import "./MyTrip.css";
import NavBar from "../NavBar/Navbar";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";

const MyTrip = props => {
  return (
    <div>
      <Container>
        <Row>
          <Button color="primary">
            <Col md={4}>CreateTrip</Col>
          </Button>
          <Col md={{ span: 6, offset: 6 }}>MY TRIP</Col>
        </Row>
      </Container>
      <Jumbotron className="display-3">
        <h1 className="display-3">Fluid jumbotron</h1>
        {/* <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default MyTrip;
