import React from 'react';
import { SpecificTripInfoProps } from './SpecificTripInfo.propTypes';
import {
    Col,
    CardTitle,
    CardText,
    Card,
    CardBody,
    CardSubtitle
  } from "reactstrap";

export const SpecificTripInfo = props => {
    return (
        <div>
           <Col sm="6">
            <Card>
              <Col sm="12">
                <CardBody>
                  <CardSubtitle><img style={{ height: "200px", width: "250px" }} src={props.image} /></CardSubtitle>
                  <CardTitle><strong>{props.tripName}</strong></CardTitle>
                  <CardSubtitle>Trip Location: {props.destination}</CardSubtitle>
                  <CardSubtitle>Trip Date: {props.date}</CardSubtitle>
                  <CardText>Description: {props.description}</CardText>
                </CardBody>
              </Col>
            </Card>
          </Col>
        </div>
    );
};

SpecificTripInfo.propTypes = SpecificTripInfoProps.propTypes;
SpecificTripInfo.defaultProps = SpecificTripInfoProps.defaultProps;
