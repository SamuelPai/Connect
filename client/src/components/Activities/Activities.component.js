import React, {useState} from 'react';
import { ActivitiesProps } from './Activities.propTypes';
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


export const Activities = props => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
    
    return (
        <div>


            <Card style={{width: "15%"}}>
                <Container fluid>
                    <Row><Label for="exampleText"> Activities</Label></Row>



                    <Card>
                        <Button color="danger" onClick={toggle}>View Activities</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                            <ModalBody>
                                <strong>Date:</strong> {props.date}
                                <br></br>
                                <strong>Link to More Info:</strong> {props.link}
                                <br></br>
                                <strong>Notes:</strong> {props.notes}
                                <br></br>
                                <strong>Number of People Confirmed:</strong> {props.confirmed}
                                <br></br>
                                <strong>Yes Votes:</strong> {props.yes}
                                <br></br>
                                <strong>No Votes:</strong> {props.no}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </Card>



                    <br></br>
                    <Button color="primary" href="./CreateActivity" size="lg">
                        <Col >CreateActivity</Col>
                    </Button>

                </Container>
            </Card>



        </div>
    );
};

Activities.propTypes = ActivitiesProps.propTypes;
Activities.defaultProps = ActivitiesProps.defaultProps;
