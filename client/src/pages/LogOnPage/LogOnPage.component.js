import React from 'react';
import { LogOnPageProps } from './LogOnPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './LogOnPage.styles.scss';
import LogOn from '../../components/LogOn/LogOn.component'

class LogOnPage extends React.Component {
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
        <LogOn />
      </div>
    );
  }
}

LogOnPage.propTypes = LogOnPageProps.propTypes;
LogOnPage.defaultProps = LogOnPageProps.defaultProps;

export default LogOnPage;