import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.component";
import { About } from "./components/About/About.component";
import { CheeseDetail } from "./pages/CheeseDetail/CheeseDetail.component";
import { ExamplePage } from "./pages/ExamplePage/ExamplePage.component";
import { NoMatch } from "./components/NoMatch";
import { LandingPage } from "./pages/LandingPage/LandingPage.component";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { MyTripPagePage } from "./pages/MyTripPagePage/MyTripPagePage.component";
import MyTrip from "./components/MyTrip/MyTrip";
import NavBar from "./pages/NavBar/Navbar";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cheese/:id" component={CheeseDetail} />
        <Route exact path="/example/:id" component={ExamplePage} />
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/MyTrip" component={MyTrip} />
        <Route exact path="/NavBar" component={NavBar} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
