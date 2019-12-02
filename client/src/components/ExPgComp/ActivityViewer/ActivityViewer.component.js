import React from 'react';
import { ActivityViewerProps } from './ActivityViewer.propTypes';
import styles from './ActivityViewer.styles.scss';
import { Card, Button, CardTitle, CardText, Row, Col, ButtonGroup  } from 'reactstrap';

const ActivityViewer = props => {
    return (
        <Row>
          <Card body>
            <CardTitle>title: {props.title}</CardTitle>
            <CardText>link: <a href={props.link}>{props.link}</a></CardText>
            <CardText>notes: {props.notes}</CardText>
            <CardText className="text-center">Vote </CardText>
            <ButtonGroup>
            <Button>Yes! {props.votesYes}</Button>
            <Button>No! {props.votesNo}</Button>
            </ButtonGroup>
          </Card>       
      </Row>
    );
};

ActivityViewer.propTypes = ActivityViewerProps.propTypes;
ActivityViewer.defaultProps = ActivityViewerProps.defaultProps;


export default ActivityViewer;