import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Jumbotron,
  Col,
  Button
} from "reactstrap";

const CreateActivity = props => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        CREATE ACTIVITY
        <Jumbotron>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Activity (Static)</Label>
              {/* <Input plaintext value="Some plain text/ static value" /> */}
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleUrl">Link</Label>
              <Input
                type="url"
                name="url"
                id="exampleUrl"
                placeholder="url placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Notes</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default CreateActivity;
