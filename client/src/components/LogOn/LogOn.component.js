import React from 'react';
import { LogOnProps } from './LogOn.propTypes';
import styles from './LogOn.styles.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LogOn = props => {
    return (
        <Form inline>
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
      </Form>
    );
  }
    );
};

LogOn.propTypes = LogOnProps.propTypes;
LogOn.defaultProps = LogOnProps.defaultProps;

export default LogOn;