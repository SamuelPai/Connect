import React from 'react';
import { ReactRouterDetailsPropTypes } from './ReactRouterDetails.propTypes';
import styles from './ReactRouterDetails.styles.scss';

export const ReactRouterDetails = props => {
  const objectTable = object => {
    return (
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(object).map(key => {
            return (
              <tr key={key}>
                <td>{ key }</td>
                <td>{ typeof object[key] === 'object' ? objectTable(object[key]) : object[key] }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>React Router Details</h1>
      <h2>this.props.location</h2>
      {objectTable(props.location)}
      <h2>this.props.history</h2>
      {objectTable(props.history)}
      <h2>this.props.match</h2>
      {objectTable(props.match)}
    </div>
  );
};

ReactRouterDetails.propTypes = ReactRouterDetailsPropTypes.propTypes;
ReactRouterDetails.defaultProps = ReactRouterDetailsPropTypes.defaultProps;
