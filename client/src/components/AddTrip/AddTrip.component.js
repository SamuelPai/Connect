import React from 'react';
import { AddTripProps } from './AddTrip.propTypes';
import styles from './AddTrip.styles.scss';
import { Jumbotron, Container } from 'reactstrap';

export const AddTrip = props => {
    return (
        <div>
            <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Pick Destination</h1>
          <p className="lead">Click here Add a Destination to start your Trip  </p>
        </Container>
      </Jumbotron>
        </div>
    );
};

AddTrip.propTypes = AddTripProps.propTypes;
AddTrip.defaultProps = AddTripProps.defaultProps;
