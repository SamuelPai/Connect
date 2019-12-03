import React from 'react';
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
// import styles from './TripPage.styles.scss';
// import Trip from '../../components/Trip/Trip'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import tripAPI from '../../utils/tripAPI';
import axios from 'axios';

export default class TripPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "",
      location: "",
      Description: "",
      tripDate: ""
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

handleLocationChange = (event) => {
  event.preventDefault();
  this.setState({
    location: event.target.value
  })
}

handleDescriptionChange = (event) => {
  event.preventDefault();
  this.setState({
    Description: event.target.value,
  })
}

handleTripDateChange = (event) => {
  event.preventDefault();
  this.setState({
    tripDate: event.target.value,
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

    fetch('/api/trips', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
    }
    });
    window.location.reload();
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder=""
              onChange={this.handleTitleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="location">location</Label>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder=""
              onChange={this.handleLocationChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Description">Description</Label>
            <Input
              type="text"
              name="Description"
              id="Description"
              placeholder=""
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tripDate">Trip Date</Label>
            <Input
              type="text"
              name="tripDate"
              id="tripDate"
              placeholder="2022-12-12 00:00:00"
              onChange={this.handleTripDateChange}
            />
          </FormGroup>
          
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
// TripPage.propTypes = TripPageProps.propTypes;
// TripPage.defaultProps = TripPageProps.defaultProps;