import React from 'react';
import { CalendarPageProps } from './CalendarPage.propTypes'
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import './calendarstyle.css'

const localizer = momentLocalizer(moment)

export class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    };
  }


  componentDidMount() {
    console.log('componentDidMount()', this.props);
   

  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }


  render() {
    return (
         <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
          );
  }
}

CalendarPage.propTypes = CalendarPageProps.propTypes;
CalendarPage.defaultProps = CalendarPageProps.defaultProps;
