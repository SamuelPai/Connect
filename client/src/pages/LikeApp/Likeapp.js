import React from "react";
import "./Likeapp.css";
import { Jumbotron, Container } from "reactstrap";

const Example = props => {
  return (
    
    <div className="container">
      <Jumbotron className="display-3">
        <h4 className="AboutApp">About This App</h4>
        <p className="lead">
          Our App here is to guide you and make your trip relaxed. You can look for places you want to go. You can invite friends and family. You can poll on an activity to go, Food to eat, Day to spend. Plan ahead with ease and enjoy your trip.
        </p> 
      </Jumbotron>
    </div>
  );
};

export default Example;
