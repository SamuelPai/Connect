import React from 'react';
import { ExampleProps } from './Example.propTypes';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


  function Example(props) {
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.tripName } src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.tripName}
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
            <li>
              <strong>Location:</strong> {props.destination}
            </li>
          </ul>
        </div>
      </div>
    );
  }  

Example.propTypes = ExampleProps.propTypes;
Example.defaultProps = ExampleProps.defaultProps;

export default Example;