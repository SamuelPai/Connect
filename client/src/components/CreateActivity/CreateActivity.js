import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Jumbotron,
  Col,
  Badge,
  Button
} from "reactstrap";

const CreateActivity = props => {
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h1>
          <Badge color="Yellow">CREATE ACTIVITY</Badge>
        </h1>
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
        <Button color="primary" size="lg" active>
          Submit
        </Button>{" "}
      </Col>
    </Row>
  );
};

export default CreateActivity;
