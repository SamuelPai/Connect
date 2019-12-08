import React from 'react';
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
// import styles from './TripPage.styles.scss';
// import Trip from '../../components/Trip/Trip'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

function redirect() {
  return <Redirect to="/MyTrip" />

}

export default class TripPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "",
      location: "",
      Description: "",
      tripDate: "",
      image: ""
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
    Description: event.target.value
  })
}

handleTripDateChange = (event) => {
  event.preventDefault();
  this.setState({
    tripDate: event.target.value
  })
}

handleImageChange = (event) => {
  event.preventDefault();
  this.setState({
    image: event.target.value
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
    this.props.history.push('/MyTrip');
  };

 

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label style={{fontSize:"30px", fontFamily:"Roboto Condensed", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}} htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder=""
              onChange={this.handleTitleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"30px", fontFamily:"Roboto Condensed", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}} htmlFor="location">Location</Label>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder=""
              onChange={this.handleLocationChange}
            />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"30px", fontFamily:"Roboto Condensed", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}} htmlFor="Description">Description</Label>
            <Input
              type="text"
              name="Description"
              id="Description"
              placeholder=""
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"30px", fontFamily:"Roboto Condensed", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}} htmlFor="image">Image</Label>
            <Input
              type="text"
              name="image"
              id="image"
              placeholder="please paste the url"
              onChange={this.handleImageChange}
            />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"30px", fontFamily:"Roboto Condensed", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}} htmlFor="tripDate">Trip Date</Label>
            <Input
              type="date"
              name="tripDate"
              id="tripDate"
              placeholder="2022-12-12 00:00:00"
              onChange={this.handleTripDateChange}
            />
          </FormGroup>
          
          <Button style={{marginTop: "10px", marginBottom: "10px"}}>Submit</Button>
        
        </Form>
      </Container>
    );
  }
}
// TripPage.propTypes = TripPageProps.propTypes;
// TripPage.defaultProps = TripPageProps.defaultProps;