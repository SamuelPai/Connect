import React from "react";
import { MyTripPagePageProps } from "./MyTripPagePage.propTypes";
import { ReactRouterDetails } from "../../components/ReactRouterDetails/ReactRouterDetails.component";
import styles from "./MyTripPagePage.styles.scss";
import Jumbotron from "../../components/MyTrip/MyTrip";
import { Container, Row, Col, Button } from "reactstrap";
import MyTrip from "../../components/MyTrip/MyTrip";
import tripAPI from '../../utils/tripAPI';
import activitiesAPI from "../../utils/activityAPI";
import {Activities} from "../../components/Activities/Activities.component";
import {
  CardTitle,
  CardText,
  Card,
  FormGroup,
  Label,
  Input,
  Media,
  CardBody,
  CardSubtitle,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import {SpecificTripInfo} from "../../components/SpecificTripInfo/SpecificTripInfo.component";


export class MyTripPagePage extends React.Component {

      state = {
        trips: [],
        specificTrip: [],
        activities: []
    };

  componentDidMount() {
    this.getTrips();
    // this.getActivities();
  }


  getTrips = () => {
    tripAPI.getTrips()
      .then(res => {
      
        // var tripArray = res.data.trips
        console.log("RESPONSE", res.data.trips);
        this.setState({ trips: res.data.trips })
        console.log("THIS.STATE.TRIPS", this.state.trips[0].title);

      })
      .catch(err => console.log(err));

  };

  getActivities = () => {
  activitiesAPI.getActivities()
  .then(res => {
    console.log("RESPONSE FOR ACTIVITIES", res.data.activity)
    this.setState({activities: res.data.activity})
  })
  .catch(err => console.log(err));
}

getSpecificTrip = (id) => {
    console.log("GETTING SPECIFIC TRIP!")
    var result = this.state.trips.filter(trip => trip.id === id);
    console.log("THE ID", result);
    this.setState({
      specificTrip: result
    })
}





  render() {
    return (
      <div>
        <Row>
          <Button color="primary" href="./Trip">
            <Col md={4}>CreateTrip</Col>
          </Button>
          <Button outline color="success">
            <Col md={6}> MY TRIP</Col>
          </Button>
        </Row>
     {this.state.trips.map(trip => (
        <MyTrip
          //passing trip props
          id={trip.id}
          key={trip.id}
          tripName={trip.title}
          image={trip.image}
          destination={trip.location}
          date={trip.tripDate}
          description={trip.Description}
          onClick={this.getSpecificTrip}
        />
      ))} 

      {this.state.specificTrip.map(trip => (
        <SpecificTripInfo 
      tripName= {trip.title}
      image={trip.image}
      destination={trip.location}
      date={trip.tripDate}
      description={trip.Description}
      
      />

      ))}
      
      
      {this.state.activities.map(activity => (
        <Activities 
          title={activity.title}
          date={activity.eventDate}
          link={activity.link}
          notes={activity.notes}
          confirmed={activity.confirmed}
          yes={activity.votesYes}
          no={activity.votesNo}
        />
      ))}
   
    
  
    </div>
    );
  }
}

MyTripPagePage.propTypes = MyTripPagePageProps.propTypes;
MyTripPagePage.defaultProps = MyTripPagePageProps.defaultProps;
