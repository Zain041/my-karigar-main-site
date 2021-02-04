// /*!

// =========================================================
// * Argon Dashboard React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
import CustomerProfile from '../components/Profile/CustomerProfile'
import ProviderProfile from '../components/Profile/ProviderProfile'
import Register from '../components/Register/Register'
import Home from '../components/home/home'
import Login from "../components/Login/Login";
// // import Tables from "views/examples/Tables.js"; 
// import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/customer-profile",
  
    component: CustomerProfile,
    layout: "/user"
  },
  {
    path: "/home",
    name: "home",
   
    component: Home,
    layout: "/user"
  },

  {
    path: "/provider-profile",
   
    icon: "fa fa-list-alt",
    component: ProviderProfile,
    layout: "/user"
  },
 

  {
    path: "/login",
    name: "Login",
    // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
   
    component: Register,
    layout: "/auth"
  }
];
export default routes;