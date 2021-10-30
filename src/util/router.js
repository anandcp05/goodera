import React from "react";
import Career from "../Career/career"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../login/login'

export default function pageRouter() {
  return (
    <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/login' component={Login} />
    <Route path='/career' component={Career} />
</Switch>
  );
}