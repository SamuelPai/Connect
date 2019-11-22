import React from 'react';
import { SearchPageProps } from './SearchPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './SearchPage.styles.scss';
import NavBar from "../NavBar/Navbar";

export class SearchPage extends React.Component {
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
        <h1>Search Page (Route: {this.props.match.url})</h1>
        
      </div>
    );
  }
}

SearchPage.propTypes = SearchPageProps.propTypes;
SearchPage.defaultProps = SearchPageProps.defaultProps;
