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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import { withRouter } from 'react-router-dom';
import whiteLogo from '../../assets/img/white.png';
import GrayLogo from '../../assets/img/gray.png';
import BlackLogo from '../../assets/img/logo-black.png';

import {logout} from '../../store/actions/authAction'
import {FetchNotifications,ClearNotifications} from '../../store/actions/notificationActions'
import img from '../../assets/img/default-avatar.png'
import './navbar.css'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Card,
  Badge,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownContext
} from "reactstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class  NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      navbarColor:"navbar-transparent",
     
      navbarCollapse:false,
      color:'',
      border:'',
      Graylogo:false,
      requested:false,
      link:"",
      avatar:null,
      iconColor:'',
     


    }
  }
  // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  // const [navbarCollapse, setNavbarCollapse] = React.useState(false);

   toggleNavbarCollapse = () => {
     this.setState({
       navbarCollapse:!this.state.navbarCollapse,
       
     })
   
    document.documentElement.classList.toggle("nav-open");
  };
  updateNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor:"",
        Graylogo:true,
        iconColor:'text-secondary'
      
      })
     
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor:"navbar-transparent",
        Graylogo:false,
        iconColor:'text-white'
       
       

      })
     
     
    }
  };

componentDidMount=() => {
  setInterval(() => {
    var profile=JSON.parse(localStorage.getItem('profile'))
    
 

  this.setState({
    role:profile!=null?profile.role:"",
    avatar:profile!=null?profile.avatar:""
  })
  }, 3000);
  this.props.FetchNotifications()
  
  
   

    window.addEventListener("scroll", this.updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor);
    };
  };
  render(){ 
 
   
    const { history } = this.props;
  return (
    <Navbar
      className={classnames("fixed-top", this.state.navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container fluid>
        <div className="navbar-translate">
          <NavbarBrand
          className=" pl-3 pt-0 pb-0"
            data-placement="bottom"
            to="/"
            
           
            tag={Link}
          >
            {this.state.Graylogo===true?
              <img src={GrayLogo} className="nav-logo" />
              :
              <img src={whiteLogo} className="nav-logo" />  
          
          }
            
          </NavbarBrand>
          <button
            aria-expanded={this.state.navbarCollapse}
            className={classnames(" navbar-toggler navbar-toggler ", {
              toggled: this.state.navbarCollapse,
            })}
            onClick={this.toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar-1 " />
            <span className="navbar-toggler-bar  bar-2" />
            <span className="navbar-toggler-bar bar-3 " />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={this.state.navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/user/home" tag={Link}>
              
                 Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Karigar
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/user/carpentor">  <DropdownItem>
                  Carpentor
                </DropdownItem></Link>
                <Link to="/user/plumber"> <DropdownItem>
                  Plumber
                </DropdownItem></Link>
                <Link to="/user/fabricator"> <DropdownItem>
                  Fabricator
                </DropdownItem></Link>
               <Link to="/user/mason"> <DropdownItem>
                  Mason
                </DropdownItem></Link>
                <Link to="/user/painter"> <DropdownItem>
                  Painter
                </DropdownItem></Link>
                <Link to="/user/electricians">   <DropdownItem>
                  Electrician
                </DropdownItem></Link>
                <Link to="/user/maintenance"> <DropdownItem>
                Repairing & Maintenance
                </DropdownItem></Link>
                <Link to="/user/gardner"> <DropdownItem>
                  Gardner
                </DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
              to="/user/about" tag={Link}
               
               
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              to="/user/services" tag={Link}
               
               
               
              >
               Services
           
              </NavLink>
            </NavItem>
            
            <NavItem>

              <NavLink
                to="/user/contact" tag={Link}
              
                
                
              >
                
                contact
              </NavLink>
            </NavItem>
            <NavItem>
              {this.state.role==="provider"?

              <NavLink
                to="/user/provider-profile" tag={Link}
              
                
                
              >
                <img src={this.state.avatar!=null?this.state.avatar:require("assets/img/faces/kaci-baum-2.jpg")} className="nav-img" />
                <div style={{marginTop:'-17px',marginLeft:'40px'}} className={`text-success`} > <i style={{fontSize:'8px'}}  class="fas fa-xs pr-2 fa-circle"></i></div>
              </NavLink>:
              <NavLink
              to="/user/customer-profile" tag={Link}
            
              
              
            >
              <img src={this.state.avatar!=null?this.state.avatar:require("assets/img/faces/kaci-baum-2.jpg")} className="nav-img" />
              <div style={{marginTop:'-17px',marginLeft:'40px'}} className={`text-success`} > <i style={{fontSize:'8px'}}  class="fas pr-2 fa-xs fa-circle"></i></div>
            </NavLink>
  }
            </NavItem>
            <NavLink
                
              
                
                
              >
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <i style={{fontSize:'25px',marginTop:'-25px'}} class={`fas ${this.state.iconColor} fa-bell`}></i><Badge style={{marginLeft:'-20px',marginTop:'-15px',marginRight:'10px',position:'absolute'}}  className=" rounded-circle" color="danger">{this.props.notifications.length}</Badge>
              </DropdownToggle>
              <DropdownMenu style={{minWidth:'350px'}} right>
                {this.props.notifications.length!=0?this.props.notifications.map((items,index)=>{
                  return(
                    <Card className="m-2 "><p style={{fontWeight:'400'}} className=" text-secondary p-2 w-100"><small>{items.type}</small><br></br>{items.message}</p> <small style={{cursor:'pointer'}} onClick={()=>{
                      this.props.ClearNotifications()
                    }} className="pl-4 pb-2 text-danger">clear</small></Card>
                  )
                }):<>
                <Card className="m-2 ">
                  <p style={{fontWeight:'400'}} className=" text-danger p-2 w-100">Notifications Not Found</p>
                </Card>
                
                </>}
               
              
              </DropdownMenu>
            </UncontrolledDropdown>
               
              </NavLink>
           
            <NavItem>
              
                {/* {
                  this.state.navbarColor ?<Button size="sm" className="btn-round border-light ml-1 mt-0 mb-0 "color="light"
                  outline  type="button">
                 
                  LOGIN
                </Button>:
                <Button size="sm"  className="btn-round ml-1 mt-0 mb-0 "color="default"
                outline  type="button">
               
                LOGIN
              </Button>
                } */}
                
                <Button onClick={()=>{
                  this.setState({
                    requested:true
                  })
                  this.props.logout().then((res)=>{
                    this.setState({
                      requested:false
                    })
                    history.push('/login')
                  })
                }} size="sm" className="btn-round  ml-1 mt-3 mb-0" color="primary"
                  outline  type="button">
                 {this.state.requested ? (
                  
                  <Loader
                  type="TailSpin"
                  color="#fff"
                  height={20}
                  width={30}
                />
              ) : (
                "LOGOUT"
              )}
                </Button>
                
             
            </NavItem>
            
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
          }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile:state.profile.profile,
  notifications:state.notification.notifications

});

export default withRouter (connect(mapStateToProps,{logout,FetchNotifications,ClearNotifications})( NavBar));
