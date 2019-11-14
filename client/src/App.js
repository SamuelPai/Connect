import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { About } from './components/About/About.component';
import { CheeseDetail } from './pages/CheeseDetail/CheeseDetail.component';
import { ExamplePage } from './pages/ExamplePage/ExamplePage.component';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cheese/:id" component={CheeseDetail} />
        <Route exact path="/example/:id" component={ExamplePage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
