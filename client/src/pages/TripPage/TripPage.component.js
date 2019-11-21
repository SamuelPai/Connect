import React from 'react';
import { TripPageProps } from './TripPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './TripPage.styles.scss';

export class TripPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: {
        title: "",
        location:"",
        description: "",
        date: "",
        image: ""
        
      }
    };
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
    tripAPI.getTrips().then(res => {
      console.log("RESPONSE.DATA.TRIPS.TITLE", res.data.trips[0].title);
      var data = res.data.trips[0];
      this.setState({
        trips: {
          title: data.title,
          location: data.location,
          description: data.description,
          date: data.date,
          image: data.image
        }
      });
    })
    .catch(err => {
      console.log("ERROR, could not load trips", err);
    })
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <div>
        <h1>{this.state.trips.title}</h1>
        <h2>Location: {this.state.trips.location}</h2>
        <p>Description: {this.state.trips.description}</p>
        <p>Date: {this.state.trips.date}</p>
        <img src={this.state.trips.image} />
      </div>
    );
  }
}

TripPage.propTypes = TripPageProps.propTypes;
TripPage.defaultProps = TripPageProps.defaultProps;
