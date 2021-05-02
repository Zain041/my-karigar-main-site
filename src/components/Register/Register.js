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
import React,{Component} from "react";

// reactstrap components
import { Button, Card, Form, Input,Dropdown,DropdownItem,DropdownMenu,DropdownToggle, Container, Row, Col } from "reactstrap";

// core components
import NavBar from "components/Navbars/Navbar.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {register} from '../../store/actions/authAction'
import Alerts from "../../components/alerts/Alerts"
import {  Redirect } from "react-router-dom";
import whiteLogo from '../../assets/img/white.png';


class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      fullName:"",
      phoneNumber:"",
      role:"",
      redirect:false
    }
  }

  handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }

  componentDidMount=()=>{
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
  }
}

handleSubmit = (e) => {
  e.preventDefault();
  
var user={
  email:this.state.email,
  phoneNumber:this.state.phoneNumber,
  fullName:this.state.fullName,
  role:this.state.role,
  password:this.state.password
}
 
  this.props
    .register(user)
    .then((res) => {
      if(this.props.auth.isRegistered==true){

     
      this.props.history.push('/auth/login')
     this.setState({
      email:"",
      password:"",
      fullName:"",
      phoneNumber:"",
      role:"",
     })
    }
      // console.log(this.props.auth.isRegistered);
      // if (this.props.auth.isRegistered === true) {
      //   this.setState({ redirect: true });
      
    });
};
  render(){ 
    // var profile= JSON.parse(localStorage.getItem('profile'))
    // if (this.props.auth.isAuthenticated && profile.role==="provider" ) {
    //   this.props.history.push("/provider-profile");
    // }else if(this.props.auth.isAuthenticated && profile.role==="customer"){
    //   this.props.history.push("/customer-profile");
    // }
    // if (this.state.redirect) {
    //   return <Redirect to="/" />;
    // }
  return (
    <>
   
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/banner1.PNG") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-register ml-auto mr-auto">
              <div className=" mx-auto">
                <img  style={{height:'90px',width:'90px',borderRadius:'100px'}} className="mb-2" src={whiteLogo}  /> <br></br>
                <span className="mx-auto pl-1  font-weight-bold">My Karigar</span> 
                </div>

                <Form className=" mt-3 register-form" onSubmit={this.handleSubmit}>

                  <Input className="mt-3" name="fullName" value={this.state.fullName} onChange={this.handleChange}  placeholder="Full Name" type="text" required />

                  <Input className="mt-3" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Phone No" type="text" required />

                  <Input className="mt-3" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="Email" type="email" required />

                  <Input className="mt-3" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Password" type="password" required/>
                  <Input className="mt-3"  type="select" name="role" value={this.state.role} onChange={this.handleChange}  required>
                  <option value=""  disabled selected>Select Role</option>
                  <option value="provider" >provider</option>
                  <option value="customer">customer</option>
         
                  </Input>
                  <Alerts/>
                  <Button  type="submit" block className="btn-round" color="danger">
                    Register
                  </Button>
                 
                </Form>
                <Link className="m-auto pt-2 font-weight-bold text-white" to="/">Login Here</Link>

              </Card>
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

export default connect( mapStateToProps,{register})( RegisterPage);
