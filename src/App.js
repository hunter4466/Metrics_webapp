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
import mic from './images/assets/mic.svg';
import config from './images/assets/config.svg';

const App = () => (
  <Router>
    <NavLink className="home_btn" to="/home">
      <h1 className="Home_Btn_text">
        Home
        <img className="mic_svg" alt="voice_control" src={mic} />
        <img className="config_svg" alt="config" src={config} />
      </h1>
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
