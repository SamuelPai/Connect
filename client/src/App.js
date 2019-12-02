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
import {MyTripPagePage} from "./pages/MyTripPagePage/MyTripPagePage.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {TripPage} from "./pages/TripPage/TripPage.component";
import {SearchPage} from "./pages/SearchPage/SearchPage.component";
import NavBar from "./pages/NavBar/Navbar";
import FooterPage from "./pages/FooterPage/Footer";
import CreateActivity from "./components/CreateActivity/CreateActivity";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cheese/:id" component={CheeseDetail} />
        <Route exact path="/example" component={ExamplePage} />
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/MyTrip" component={MyTripPagePage} />
        <Route exact path="/Trip" component={TripPage} /> 
        <Route exact path="/Search" component={SearchPage} />
        <Route exact path="/NavBar" component={NavBar} />
        <Route exact path="/CreateActivity" component={CreateActivity} />
        <Route component={NoMatch} />
      </Switch>
      <FooterPage />
    </Router>
  );
}
export default App;
