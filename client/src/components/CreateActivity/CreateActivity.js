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

export default class CreateActivity extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      link: "",
      eventDate: "",
      notes: "",
      tripId: ""
    }
  }
  componentDidMount() {
    // console.log('componentDidMount()', this.props);
  }

handleTitleChange = (event) => {
  event.preventDefault();
  this.setState({
    // [event.target.title]: event.target.value,
    // [event.target.location]: event.target.value,
    // [event.target.Description]:event.target.value,
    // [event.target.tripDate]: event.target.value
    title: event.target.value
  })
}

handleLinkChange = (event) => {
  event.preventDefault();
  this.setState({
    link: event.target.value
  })
}

handleEventDateChange = (event) => {
  event.preventDefault();
  this.setState({
    eventDate: event.target.value,
  })
}

handleTripIdChange = (event) => {
  event.preventDefault();
  this.setState({
    tripId: event.target.value
  })
}

handleNotesChange = (event) => {
  event.preventDefault();
  this.setState({
    notes: event.target.value,
  })
}

  handleSubmit(event) {
    event.preventDefault()
    // const data = new FormData(event.target)
    const data = this.state;
    console.log("THIS IS THE DATA", data);

  // const testData = {
  //     "title": "Fishing trip",
  //     "location": "Florida Keys",
  //     "Description": "I want to catch a shark!",
  //     "tripDate": "2022-12-12",
  //     "image": "https://www.usnews.com/dims4/USNEWS/51a07af/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F47%2Fcb%2F12d46a8a47fb9616e593f5667cf4%2F1.%20Florida%20Keys%20Getty.jpg"
  //     }
    fetch('/api/activities', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
    }
    });
    this.props.history.push('/MyTrip');
  };

  render() {
    return (
      <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h1>
          <Badge color="Yellow">CREATE ACTIVITY</Badge>
        </h1>
        <Jumbotron>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Activity</Label>
              {/* <Input plaintext value="Some plain text/ static value" /> */}
              <Input onChange={this.handleTitleChange} type="textarea" name="title" id="exampleText" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleUrl">Link</Label>
              <Input
                type="url"
                name="link"
                id="exampleUrl"
                placeholder="url placeholder"
                onChange={this.handleLinkChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="eventDate"
                id="exampleDate"
                placeholder="date placeholder"
                onChange={this.handleEventDateChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Trip Id</Label>
              <Input
                type="text"
                name="tripId"
                id="exampleDate"
                placeholder="date placeholder"
                onChange={this.handleTripIdChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Notes</Label>
              <Input onChange={this.handleNotesChange} type="textarea" name="notes" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Jumbotron>
      </Col>
    </Row>
    );
  }
}
