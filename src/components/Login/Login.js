// /*!

// =========================================================
// * Paper Kit React - v1.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-kit-react

// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import React ,{Component} from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {LogIn} from '../../store/actions/authAction'

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Alerts from "components/alerts/Alerts";

// core components

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }

  handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }
  handleSubmit=(e)=>{
    console.log("inside submit")
    e.preventDefault();

    this.props.LogIn({
      email: this.state.email,
      password: this.state.password,
    }).then(( async res=>{
      this.setState({
        email:"",
        password:""
      })
    this.props.history.push('/user/home')
    }));
  }
  render(){ 
    var profile= JSON.parse(localStorage.getItem('profile'))
    if (this.props.auth.isAuthenticated && profile.role==="provider" ) {
      return <Redirect to="/user/provider-profile"/>
    
    }else if(this.props.auth.isAuthenticated && profile.role==="customer"){
      return <Redirect to="/user/customer-profile"/>

    }
    // if(this.props.loggedIn===true){
    //   return <Redirect to="/customer-profile"/>
    // }
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">My Karigar</h3>
               
                <Form className=" mt-5 register-form" onSubmit={this.handleSubmit}>
                  
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" type="email" required />
                  </InputGroup>
                 
                  <InputGroup className=" mt-3 form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" required/>
                  </InputGroup>
                  
                <Alerts/>
                  <Button
                  type="submit"
                    block
                    className="btn-round"
                    color="danger"
                   
                  >
                    LOGIN
                  </Button>

                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
              <div className="col text-center">
                <Link to="/auth/register">  <Button
                  className="btn-round"
                  outline
                  color="neutral"

                  size="lg"
                  target="_blank"
                >
                  Register Here
                </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
      }
}
const mapStateToProps = (state) => ({
  auth: state.auth,

});
export default connect(mapStateToProps,{LogIn})( Login);
