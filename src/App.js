import React from "react";
import Header from "./Header";
import College from "./College";
import MobileCard from "./MobileCard"
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <Switch>
      <Route path='/colleges'>
        <Header />
        <College />
      </Route>
      <Route path='/test'>
        <MobileCard/>
      </Route>
      <Route path='/'>
        <Redirect to='/colleges' />
      </Route>
    </Switch>
  );
}

export default App;
