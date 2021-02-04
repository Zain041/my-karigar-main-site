import React, { Component } from 'react'

import {BrowserRouter as Router , Route,Redirect ,Switch} from 'react-router-dom';
import "assets/css/bootstrap.min.css";
import "assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "assets/demo/demo.css";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import Footer from './components/footer/footer';
import Home from './components/home/home';


import NavBar from 'components/Navbars/Navbar';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ProviderProfile from 'components/Profile/ProviderProfile';
import CustomerProfile from 'components/Profile/CustomerProfile';
import User from 'layouts/user';
import AuthLayout from './layouts/Auth'







class App extends Component {

 
  render(){ 
  // const token = localStorage.getItem('token')\
  const token=null
  return (
    <Router> 
      <>
     
      
       {/* header start */}
     
       {/* header end */}
       
     
    <Switch>
 
{/*      
      <Route path='/customer-profile' component={CustomerProfile}/>
      <Route path='/provider-profile' component={ProviderProfile}/>
      
     <Route exact path='/login' component={Login}/>
     <Route path='/register' component={Register}/> */}
      {/* <Protected path='/admin' component={Admin}/> */}
      {/* <Protected path='/signout' component={Signout}/>  */}
     
      <Route path="/user" render={props => <User {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  
       {/* routing content */}
 
 
 
       {/* footer start */}
 
       {/* footer end */}
    
     
   
    
    </>
    </Router>
  
  );
  }
}

export default App;
