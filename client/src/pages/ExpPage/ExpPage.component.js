import React from 'react';
import { ExpPageProps } from './ExpPage.propTypes'
import tripAPI from '../../utils/tripAPI';
import styles from './ExpPage.styles.scss';
import TripSelector from '../../components/ExPgComp/TripSelector/TripSelector.component';
import TripViewer from '../../components/ExPgComp/TripViewer/TripViewer.component';
import { Container, Row, Col } from 'reactstrap';

export default class ExpPage extends React.Component {
  state = {
    trips: []
  }

  componentDidMount() {
    this.getTrips();
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
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
    <Row>
      <Col>
        <h2>Trip Selector</h2>
        {this.state.trips.map(trip => (
          <TripSelector 
          title={trip.title}
          />
        ))}
      </Col>
      <Col>
      <h3>Trip Viewer</h3>
      {this.state.trips.map(trip => (
        <TripViewer 
        title={trip.title}
        tripDate={trip.tripDate}
        location={trip.location}
        Description={trip.Description}
        image={trip.image}
        />
      ))}
      </Col>
    </Row>
    );
  }
}

ExpPage.propTypes = ExpPageProps.propTypes;
ExpPage.defaultProps = ExpPageProps.defaultProps;
