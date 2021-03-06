import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Dates from '../pages/Dates';
import Nav from './Nav';
import Details from '../pages/Details';
import PrivateRoute from './PrivateRoute';
import AddDestination from '../pages/AddDestination';

const App = () => (
  <div className="App row">
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dates" exact component={Dates} />
      <PrivateRoute path="/dates/:country/:city" component={Dates} />
      <PrivateRoute path="/add-destination" component={AddDestination} />
      <Route path="/:country" component={Details} />
    </Switch>
  </div>
);

export default App;
