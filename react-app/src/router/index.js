import React from 'react';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Home from '../pages/home/home';

export default class Routers extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path='/' component={Home}/>
      </Router>
    );
  }
}
