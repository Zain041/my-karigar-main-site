import React from 'react'

import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';


import Footer from './components/footer/footer';
import Home from './components/home/home';


import NavBar from 'components/Navbars/Navbar';
import Login from './components/Login/Login'
import Register from './components/Register/Register'







function App() {
  return (
    <Router> 
    <div className="App">
      {/* header start */}
      <NavBar/>
      {/* header end */}
      
    
   <Switch>
     
      <Route path='/login' component={Login}/>
     <Route path='/register' component={Register}/>
     {/* <Protected path='/admin' component={Admin}/> */}
     {/* <Protected path='/signout' component={Signout}/>  */}
     <Route path='/' exact component={Home}/>
   </Switch>
 
      {/* routing content */}



      {/* footer start */}

      
      {/* footer end */}
    </div>
    </Router>
  );
}

export default App;
