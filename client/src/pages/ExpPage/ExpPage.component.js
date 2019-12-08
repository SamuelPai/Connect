import React from "react";
import { ExpPageProps } from "./ExpPage.propTypes";
// API's
import tripAPI from "../../utils/tripAPI";
import activityAPI from "../../utils/activityAPI";
// Components
import TripSelector from "../../components/ExPgComp/TripSelector/TripSelector.component";
import TripViewer from "../../components/ExPgComp/TripViewer/TripViewer.component";
import ActivityViewer from "../../components/ExPgComp/ActivityViewer/ActivityViewer.component";
// import Toggle from '../../components/ExPgComp/Toggle/Toggle.component';
// Styles
import { Container, Row, Col, Button, CardGroup } from "reactstrap";

export default class ExpPage extends React.Component {
  state = {
    trips: [],
    tripById: [],
    activities: []
  };

  componentDidMount() {
    this.getTrips();
    this.getTripsById();
    // this.getActivity();
    this.getActivityById();
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
    tripAPI
      .getTrips()
      .then(res => {
        var tripArray = res.data.trips;
        console.log(tripArray);
        this.setState({ trips: tripArray });
      })
      .catch(err => console.log(err));
  };

  getTripsById = () => {
    const { id } = this.props.match.params;
    if (id) {
      tripAPI
        .getTripsById(id)
        .then(res => {
          var tripId = res.data.trip;
          console.log("trip", tripId);
          this.setState({ tripById: tripId });
        })
        .catch(err => console.log(err));
    }
  };

  // getActivity = () => {
  //   activityAPI.getActivity()
  //   .then(res => {
  //     var activityArray = res.data.activity
  //     console.log(activityArray)
  //     this.setState({activities: activityArray})
  //   })
  //   .catch(err => console.log(err))
  // }
  getActivityById = () => {
    const { id } = this.props.match.params;
    if (id) {
      activityAPI
        .getById(id)
        .then(res => {
          var activitiesArray = res.data.activity;
          console.log("Activities", activitiesArray);
          this.setState({ activities: activitiesArray });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container style={{height:"800px"}}>
        <Row>
          <Col style={{marginTop:"10px"}} sm="3">
            <h5 style={{fontSize:"30px", fontFamily:"Carter One, cursive", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}}>My Trips</h5>
            {this.state.trips.map(trip => (
              <TripSelector title={trip.title} id={trip.id} />
            ))}
            <Button style={{width:"134px", marginTop:"10px"}} color="primary" href="/Trip">
              Create Trip
            </Button>
          </Col>
          <Col style={{marginTop:"10px"}} sm="6">
            <h5 style={{fontSize:"30px", fontFamily:"Carter One, cursive", textShadow:"4px 2px black", color:"rgb(244, 250, 248)"}}>Trip Info</h5>
            <TripViewer
              id={this.state.tripById.id}
              title={this.state.tripById.title}
              tripDate={this.state.tripById.tripDate}
              location={this.state.tripById.location}
              Description={this.state.tripById.Description}
              image={this.state.tripById.image}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{fontSize: "30px", color:"rgb(244, 250, 248)", marginTop:"20px", marginBottom:"-1px", fontFamily:"Carter One, cursive", textShadow:"4px 2px black"}}>Trip Activities</h5>
            <Button style={{marginTop:"2px"}} color="primary" href="/CreateActivity">
              Create Activity
            </Button>
            <CardGroup style={{marginLeft:"-10px"}}> 
              {this.state.activities.map(activity => (
                <ActivityViewer
                  title={activity.title}
                  link={activity.link}
                  notes={activity.notes}
                  votesYes={activity.votesYes}
                  votesNo={activity.votesNo}
                />
              ))}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

ExpPage.propTypes = ExpPageProps.propTypes;
ExpPage.defaultProps = ExpPageProps.defaultProps;
