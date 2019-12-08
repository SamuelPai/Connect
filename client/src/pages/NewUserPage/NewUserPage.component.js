import React from 'react';
import { NewUserPageProps } from './NewUserPage.propTypes'
import { Button, Form, FormGroup, Label, Input, Card, Row, Col, CardTitle } from 'reactstrap';


class NewUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <div>
  <Row>
    <Col sm="4">

    </Col>
      <Col sm="4">
        <Card body className="theLogIn">
          <CardTitle>
            <strong>New User</strong>
          </CardTitle>
        <Form >
        <FormGroup>
          <Label for="exampleEmail" hidden>First Name</Label>
          <Input type="text" name="name" id="exampleEmail" placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" hidden>Last Name</Label>
          <Input type="text" name="name" id="exampleEmail" placeholder="Last Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Re-type Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Re-type Password" />
        </FormGroup>

        <Button href="/MyTrip">Submit</Button>
      </Form>
        </Card>
      </Col>
<Col sm="4">
      
    </Col>
      </Row>
      </div>
    );
  }
}

NewUserPage.propTypes = NewUserPageProps.propTypes;
NewUserPage.defaultProps = NewUserPageProps.defaultProps;

export default NewUserPage;