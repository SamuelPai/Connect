import React from 'react';
import { TripSelectorProps } from './TripSelector.propTypes';
import styles from './TripSelector.styles.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';


const TripSelector = props => {
    return (
    <div>
   <ListGroup>
        <ListGroupItem tag="a" href={'/exp/' + props.id} action>{props.title}</ListGroupItem>
      </ListGroup>
    </div>
    );
};

TripSelector.propTypes = TripSelectorProps.propTypes;
TripSelector.defaultProps = TripSelectorProps.defaultProps;

export default TripSelector;