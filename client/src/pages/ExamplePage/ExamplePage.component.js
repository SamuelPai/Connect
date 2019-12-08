import React from "react";
import { Container, Row, Col } from 'reactstrap';
import tripAPI from '../../utils/tripAPI';

export class ExamplePage extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    trips: []
  };

  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    tripAPI.getTrips()
      .then(res => {
        this.setState({ trips: res.data })
      })
      .catch(err => console.log(err));
  };

  submitForm(e) {
    e.preventDefault();
    console.log('clicked')
  }

  render() {
    return (
    <Container>
      {/* <div> */}
        {/* {this.state.trips.map(trip => (
          <Example
            // id={trip.id}
            // key={trip.id}
            tripName={trip.tripName}
            image={trip.image}
            destination={trip.destination}
            description={trip.description}
          />
        ))}
      </div> */}
    </Container>  
    );
  } 
}
