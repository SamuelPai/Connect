import React from 'react';
import { ExpPageProps } from './ExpPage.propTypes'
// API's
import tripAPI from '../../utils/tripAPI';
import activityAPI from '../../utils/activityAPI';
// Components
import TripSelector from '../../components/ExPgComp/TripSelector/TripSelector.component';
import TripViewer from '../../components/ExPgComp/TripViewer/TripViewer.component';
import ActivityViewer from '../../components/ExPgComp/ActivityViewer/ActivityViewer.component';
// import Toggle from '../../components/ExPgComp/Toggle/Toggle.component';
// Styles
import { Container, Row, Col } from 'reactstrap';
import styles from './ExpPage.styles.scss';


export default class ExpPage extends React.Component {
  state = {
    trips: [],
    tripById: [],
    activities: []
  }

  componentDidMount() {
    this.getTrips();
    this.getActivity();
    this.getTripsById();
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

  getTripsById = () => {
    const { id } = this.props.match.params;
    if (id) {
      tripAPI.getTripsById(id)
      .then(res => {
        var tripId = res.data.trip
        console.log("trip", tripId);
        this.setState({ tripById: tripId})
      })
      .catch(err => console.log(err));
  }
  }

  getActivity = () => {
    activityAPI.getActivity()
    .then(res => {
      var activityArray = res.data.activity
      console.log(activityArray)
      this.setState({activities: activityArray})
    })
    .catch(err => console.log(err))
  }

  

  render() {
    return (
    <Container>
    <Row>
      <Col sm="3" >
        <h2>Trip Selector</h2>
        {this.state.trips.map(trip => (
          <TripSelector 
          title={trip.title}
          id={trip.id}
          />
        ))}
      </Col>
      <Col sm="6">
      <h3>Trip Viewer</h3>
      {this.state.tripById.map(trip => (
        <TripViewer
        title={trip.title}
        tripDate={trip.tripDate}
        location={trip.location}
        Description={trip.Description}
        image={trip.image}
        />
        ))}
      </Col>
      <Col sm="3">
      <h3>Activity Viewer</h3>
      {/* {this.state.activities.map(activity => ( */}
        <ActivityViewer 
        // title={activity.title}
        // link={activity.link}
        // notes={activity.notes}
        // votesYes={activity.votesYes}
        // votesNo={activity.votesNo}
      />
      {/* ))} */}
      </Col>
    </Row>
    </Container>
    );
  }
}

ExpPage.propTypes = ExpPageProps.propTypes;
ExpPage.defaultProps = ExpPageProps.defaultProps;
