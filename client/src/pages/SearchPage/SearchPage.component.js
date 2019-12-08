import React from 'react';
import { SearchPageProps } from './SearchPage.propTypes'
import Search from "../../components/Search/Search";

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
     <Search />
      </div>
    );
  }
}

SearchPage.propTypes = SearchPageProps.propTypes;
SearchPage.defaultProps = SearchPageProps.defaultProps;
