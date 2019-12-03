import React from 'react';
import { TripPageProps } from './TripPage.propTypes'
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
// import styles from './TripPage.styles.scss';
// import Trip from '../../components/Trip/Trip'

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import tripAPI from '../../utils/tripAPI';
import axios from 'axios';




export class TripPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: {
        title: 'New Trip',
        location: 'New Location',
        Description: 'New Description',
        tripDate: '2021-21-21',
        image: 'example.com'
    }
    }
  }

  componentDidMount() {
    // console.log('componentDidMount()', this.props);

    }
  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  handleSubmit(event) {
    event.preventDefault()
    // get the data
    // var trips = {
    //       title: this.state.name,
    //       location: this.state.location,
    //       Description: this.state.Description,
    //       tripDate: this.state.tripDate,
    //       image: this.state.image,
    // }
    // console.log('trip data', trips)
    
    axios.post(`/api/trips`, {
      trips: {
        title: this.state.name,
        location: this.state.location,
        Description: this.state.Description,
        tripDate: this.state.tripDate,
        image: this.state.image,
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
    .catch(err => console.log(err));
}


  render() {
    return (
      <Container>
      <Form>
            <FormGroup>
              <Label for="exampleEmail">title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUrl">Description</Label>
              <Input
                type="text"
                name="Description"
                id="Description"
                placeholder=""
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="exampleNumber">tripDate</Label>
              <Input
                type="date"
                name="tripDate"
                id="tripDate"
                placeholder=""
              />
            </FormGroup> */}
            <Button type='submit'>Submit</Button>
          </Form>
      </Container>   

     );
  }
}

TripPage.propTypes = TripPageProps.propTypes;
TripPage.defaultProps = TripPageProps.defaultProps;
