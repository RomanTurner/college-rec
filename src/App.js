import React from "react";
import College from "./College";
import Header from "./Header";
import CollegeShow from "./CollegeShow";
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <Switch>
      <Route path='/colleges'>
        <Header />
        <College />
      </Route>
      <Route path='colleges/:name'>
        <CollegeShow />
      </Route>
      <Route path='/'>
        <Redirect to='/colleges' />
      </Route>
    </Switch>
  );
}

export default App;
