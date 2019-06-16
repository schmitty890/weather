import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weather from "./pages/Weather/Weather";
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () =>
  <Router>
    <section>
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route exact path="/account" component={Weather} />
        <Route component={NoMatch} />
      </Switch>
    </section>
  </Router>;

export default App;