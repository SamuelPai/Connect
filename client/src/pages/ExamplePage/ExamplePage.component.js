import React from "react";
import Example from "../../components/Example/Example.component";
import friends from '../../utils/friends.json';
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
        var tripArray = res.data.trips
        console.log(tripArray);
        this.setState({ trips: tripArray })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
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
    );
  } 
}
