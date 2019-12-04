import React from 'react';
import { LogOnProps } from './LogOn.propTypes';
import styles from './LogOn.styles.scss';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, Col, CardTitle, CardText } from 'reactstrap';

const LogOn = props => {
    return (
<div>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

        {/* <Form >
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
        <Button>Submit</Button>
      </Form> */}
      </div>
    );
};

LogOn.propTypes = LogOnProps.propTypes;
LogOn.defaultProps = LogOnProps.defaultProps;

export default LogOn;