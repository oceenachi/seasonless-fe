import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./View/Dashboard";
// import Form from "./views/Form";

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={Dashboard} />
        {/* <Route exact path="/history" component={History} />
        // <Route exact path="/form" component={Form} />  */}
      </App>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
