import React from "react";
import { MyTripPagePageProps } from "./MyTripPagePage.propTypes";
import { ReactRouterDetails } from "../../components/ReactRouterDetails/ReactRouterDetails.component";
import styles from "./MyTripPagePage.styles.scss";
import Jumbotron from "../../components/MyTrip/MyTrip";
import { Container, Row, Col, Button } from "reactstrap";
import MyTrip from "../../components/MyTrip/MyTrip";
import tripAPI from '../../utils/tripAPI';


export class MyTripPagePage extends React.Component {

      state = {
        trips: []
    };

  componentDidMount() {
    this.getTrips();
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log(
      "componentDidUpdate(prevProps, prevState, prevSnapshot)",
      prevProps,
      prevState,
      prevSnapshot
    );
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
        <MyTrip
          id={trip.id}
          key={trip.id}
          tripName={trip.tripName}
          image={trip.image}
          destination={trip.destination}
          description={trip.description}
        />
      ))}
    </div>
    );
  }
}

MyTripPagePage.propTypes = MyTripPagePageProps.propTypes;
MyTripPagePage.defaultProps = MyTripPagePageProps.defaultProps;
