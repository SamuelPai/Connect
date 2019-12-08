import React from 'react';
import { LogOnProps } from './LogOn.propTypes';
import { Button, Form, FormGroup, Label, Input, Card, Row, Col, CardTitle, CardText } from 'reactstrap';

const LogOn = props => {
    return (
<div>
  <Row>
    <Col sm="4">

    </Col>
      <Col sm="4">
        <Card body className="theLogIn">
          <CardTitle>
            <strong>Log On</strong>
          </CardTitle>
        <Form >
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button href="/MyTrip">Submit</Button>
        <CardText>
          Not Registered? <a href="/newuser">Create a new account</a>
        </CardText>
      </Form>
        </Card>
      </Col>
<Col sm="4">
      
    </Col>
      </Row>
      </div>
    );
};

LogOn.propTypes = LogOnProps.propTypes;
LogOn.defaultProps = LogOnProps.defaultProps;

export default LogOn;