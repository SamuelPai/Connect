import React from "react";
import "./MyTrip.css";

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

      <Row>
        {/* <Col xs="6" sm="4">
          gdf
        </Col> */}
        <Col xs="6" sm="4">
          Description venu:
        </Col>
        <Col sm="4">Who is coming</Col>
      </Row>

      <Jumbotron>
        <h1 className="display-3">Fluid jumbotron</h1>
      </Jumbotron>
    </div>
  );
};

export default MyTrip;
