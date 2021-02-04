/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
