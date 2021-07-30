import React from "react";
import Test from "./Test";
import Header from "./Header";
import College from "./College";
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <Switch>
      <Route path='/colleges'>
        <Header />
        <College />
      </Route>
      <Route path='/test'>
        <Test />
      </Route>
      <Route path='/'>
        <Redirect to='/colleges' />
      </Route>
    </Switch>
  );
}

export default App;
