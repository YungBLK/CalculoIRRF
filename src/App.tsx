import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./container/home";
import Header from "./container/header";

const Rounting = () => {
  return (
    <Router>  
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tabela-do-imposto-de-renda">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}





export default Rounting;
