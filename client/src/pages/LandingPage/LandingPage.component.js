import React from "react";
import { LandingPageProps } from "./LandingPage.propTypes";
import { ReactRouterDetails } from "../../components/ReactRouterDetails/ReactRouterDetails.component";
import styles from "./LandingPage.styles.scss";
import LoginButton from "../../components/LoginButton/LoginButton";
import tripAPI from "../../utils/tripAPI";
import Carousel from "../../components/Carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import LikeApp from "../LikeApp/Likeapp";
// import MyTripPage from "../MyTripPagePage/MyTripPagePage.component";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: {
        title: "",
        location: "",
        description: "",
        date: "",
        image: ""
      }
    };
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
      <div className="carousel">
        <Carousel />
        <div>
          <LoginButton />
          <div>
            <LikeApp />
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = LandingPageProps.propTypes;
LandingPage.defaultProps = LandingPageProps.defaultProps;
