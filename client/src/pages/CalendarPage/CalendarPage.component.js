import React from 'react';
import { CalendarPageProps } from './CalendarPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './CalendarPage.styles.scss';
import NavBar from "../NavBar/Navbar";

export class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Calendar Page (Route: {this.props.match.url})</h1>
       
      </div>
    );
  }
}

CalendarPage.propTypes = CalendarPageProps.propTypes;
CalendarPage.defaultProps = CalendarPageProps.defaultProps;
