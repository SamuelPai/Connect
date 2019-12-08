import React from 'react';
import { SpecificTripInfoProps } from './SpecificTripInfo.propTypes';
import {
    Container,
    Row,
    Col,
    Button,
    CardTitle,
    CardText,
    Card,
    FormGroup,
    Label,
    Input,
    Jumbotron,
    Media,
    CardBody,
    CardSubtitle,
    Modal, ModalHeader, ModalBody, ModalFooter
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
