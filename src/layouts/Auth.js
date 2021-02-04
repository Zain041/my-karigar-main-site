/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "../components/Navbars/AuthNavbar";
// import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "../components/routes";

class Auth extends React.Component {
	
	getRoutes = route => {
		return route.map((prop, key) => {
			if (prop.layout === "/auth") {
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
	render() {
		return (
			<>
			
					
					
					
					
					<Container  style={{position:'absolute',top:'0',bottom:'0',left:'0',right:'0'}}className="d-inline pr-0 pl-0 h-100 w-100" fluid>
						
							<Switch>
								{this.getRoutes(routes)}
								<Redirect from="*" to="/auth/login" />
							</Switch>
						
					</Container>
				
				{/* <AuthFooter /> */}
			</>
		);
	}
}

export default Auth;