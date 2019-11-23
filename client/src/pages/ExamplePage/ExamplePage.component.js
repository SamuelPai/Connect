import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Example from "../../components/Example/Example.component";
import tripAPI from '../../utils/tripAPI';
import ExampleForm from '../../components/ExampleForm/ExampleForm.component'

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
        var tripArray = res.data.trips
        console.log(tripArray);
        this.setState({ trips: tripArray })
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
      <ExampleForm />
      <div>
        {this.state.trips.map(trip => (
          <Example
            id={trip.id}
            key={trip.id}
            title={trip.title}
            image={trip.image}
            Description={trip.Description}
            location={trip.location}
          />
        ))}
      </div>
    </Container>  
    );
  } 
}
