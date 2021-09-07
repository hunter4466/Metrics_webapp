import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import './styles/_main.scss';
import Home from './components/home';
import Details from './components/details';

const App = () => (
  <Router>
    <NavLink className="home_btn" to="/home">
      <h1 className="Home_Btn_text">Home</h1>
    </NavLink>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  </Router>
);
export default App;
