import React from "react";
import { MyTripPagePageProps } from "./MyTripPagePage.propTypes";
import { ReactRouterDetails } from "../../components/ReactRouterDetails/ReactRouterDetails.component";
import styles from "./MyTripPagePage.styles.scss";
import Jumbotron from "../../components/MyTrip/MyTrip";
import { Container, Row, Col, Button } from "reactstrap";

export class MyTripPagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount()", this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log(
      "componentDidUpdate(prevProps, prevState, prevSnapshot)",
      prevProps,
      prevState,
      prevSnapshot
    );
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Row />
        <Container />
        <Col />
      </div>
    );
  }
}

MyTripPagePage.propTypes = MyTripPagePageProps.propTypes;
MyTripPagePage.defaultProps = MyTripPagePageProps.defaultProps;
