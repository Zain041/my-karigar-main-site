
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages

import App from "app";
import { Provider } from "react-redux";
import store from "store/store";
// others

ReactDOM.render(
  <Provider store={store}><App/></Provider>
 ,
  document.getElementById("root")
);
