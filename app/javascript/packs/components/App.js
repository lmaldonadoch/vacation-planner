import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dates from '../pages/Dates';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dates" exact component={Dates} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
