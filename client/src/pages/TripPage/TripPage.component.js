import React from 'react';
import { TripPageProps } from './TripPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './TripPage.styles.scss';
import Trip from '../../components/Trip/Trip'



export class TripPage extends React.Component {
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
        <Trip />
      </div>
    );
  }
}

TripPage.propTypes = TripPageProps.propTypes;
TripPage.defaultProps = TripPageProps.defaultProps;
