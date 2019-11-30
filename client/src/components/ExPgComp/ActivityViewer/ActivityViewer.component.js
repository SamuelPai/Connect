import React from 'react';
import { ActivityViewerProps } from './ActivityViewer.propTypes';
import styles from './ActivityViewer.styles.scss';
import { Card, Button, CardTitle, CardText, Row, Col, ButtonGroup  } from 'reactstrap';

const ActivityViewer = props => {
    return (
        <Row>
          <Card body>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.link}</CardText>
            <CardText>{props.notes}</CardText>
            <CardText>Votes- Yes:{props.votesYes} | No:{props.votesNo}</CardText>
            <ButtonGroup>
            <Button>Vote Yes!</Button>
            <Button>Vote No!</Button>
            </ButtonGroup>
          </Card>       
      </Row>
    );
};

ActivityViewer.propTypes = ActivityViewerProps.propTypes;
ActivityViewer.defaultProps = ActivityViewerProps.defaultProps;


export default ActivityViewer;