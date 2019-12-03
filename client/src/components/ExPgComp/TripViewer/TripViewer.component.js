import React from 'react';
import { TripViewerProps } from './TripViewer.propTypes';
import styles from './TripViewer.styles.scss';
import { Media } from 'reactstrap';

const TripViewer = props => {
    return (
        <Media>
        <Media left href="#">
          <Media object src={props.image} alt={props.title} />
        </Media>
        <Media body>
          <Media heading>
            {props.title}
            </Media>
            <Media body>
            {props.location}
            </Media>
            <Media body>
            {props.tripDate}
            </Media>
            <Media body>
            {props.Description}
            </Media>
        </Media>
      </Media>
    );
};

TripViewer.propTypes = TripViewerProps.propTypes;
TripViewer.defaultProps = TripViewerProps.defaultProps;

export default TripViewer;