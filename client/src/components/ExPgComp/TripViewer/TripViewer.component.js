import React from 'react';
import { TripViewerProps } from './TripViewer.propTypes';
import styles from './TripViewer.styles.scss';
import { Media, Card } from 'reactstrap';

const TripViewer = props => {
    return (
      <Card style={{padding:"10px"}}>
        <Media>
        <Media left href="#">
          <Media style={{width:"200px", height:"200px", margin:"10px"}} object src={props.image} alt={props.title} />
        </Media>
        <Media body>
          <u><Media heading>
            {props.title}
            </Media></u>
            <Media body>
            <strong>Location:</strong> {props.location}
            </Media>
            <Media body>
            <strong>Date:</strong> {props.tripDate}
            </Media>
            <Media body>
            <strong>Description:</strong> {props.Description}
            </Media>
        </Media>
      </Media>
      </Card>
    );
};

TripViewer.propTypes = TripViewerProps.propTypes;
TripViewer.defaultProps = TripViewerProps.defaultProps;

export default TripViewer;