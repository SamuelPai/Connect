import React from 'react';
import { ExampleProps } from './Example.propTypes';
import styles from './Example.styles.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  
  function Example(props) {
    return (
        <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.title}
            </li>
            <li>
              <strong>Description:</strong> {props.Description}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
      </div>
    );
  }  

Example.propTypes = ExampleProps.propTypes;
Example.defaultProps = ExampleProps.defaultProps;

export default Example;