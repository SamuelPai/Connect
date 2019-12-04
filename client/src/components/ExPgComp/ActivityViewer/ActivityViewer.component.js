import React from 'react';
import { ActivityViewerProps } from './ActivityViewer.propTypes';
import styles from './ActivityViewer.styles.scss';
import { Card, Button, CardTitle, CardText, ButtonGroup  } from 'reactstrap';

const ActivityViewer = props => {
    return (
          <Card body>
            <CardTitle>Name: {props.title}</CardTitle>
            <CardText>Link: <a href={props.link}>{props.link}</a></CardText>
            <CardText>Notes: {props.notes}</CardText>
            <CardText className="text-center">Vote </CardText>
            <ButtonGroup>
            <Button>Yes {props.votesYes}</Button>
            <Button>No {props.votesNo}</Button>
            </ButtonGroup>
          </Card>  
    );
};

ActivityViewer.propTypes = ActivityViewerProps.propTypes;
ActivityViewer.defaultProps = ActivityViewerProps.defaultProps;


export default ActivityViewer;