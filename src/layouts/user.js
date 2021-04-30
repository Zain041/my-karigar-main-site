
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";


import Navbar from "../components/Navbars/Navbar";

import routes from "../components/routes";
import { connect } from "react-redux";
import Footer from "../components/footer/footer";

class User extends React.Component {
  // componentDidUpdate(e) {
  //   // document.documentElement.scrollTop = 0;
  //   // document.scrollingElement.scrollTop = 0;
  //   // this.refs.mainContent.scrollTop = 0;
  // }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    if (this.props.isAuthenticated === false) {
			return <Redirect to="/auth/login" />;
		}
    return (
      <>
        <Navbar
          {...this.props}
          routes={routes}
          span={{
               innerLink:"/user/home",
              //  h3:require("ADMIN PANEl")   
               
          }}
          // logo={{
          //   innerLink: "/admin/index",
          //   imgSrc: require("assets/img/brand/argon-react.png"),
          //   imgAlt: "..."
          // }}
        />  
        <div className="main-content" ref="mainContent">
         
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/user/home" />
          </Switch>
          <Container fluid>
          
       <Footer/>
          </Container>
        </div>
      </> 
    );
  }
}
export function mapStateToProps(state) {
	return {
    state,
	
		// user: state.auth.user,
		// notification: state.auth.notification,
		// msg: state.auth.msg,
		isAuthenticated:state.auth.isAuthenticated
		
	};
}
export default connect(mapStateToProps) (User);