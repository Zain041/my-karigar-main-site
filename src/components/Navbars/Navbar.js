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
import img from '../../assets/img/default-avatar.png'
import './navbar.css'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button
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
      avatar:null
     


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
        Graylogo:true
      
      })
     
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor:"navbar-transparent",
        Graylogo:false
       
       

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
  
  
   

    window.addEventListener("scroll", this.updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor);
    };
  };
  render(){ 
  console.log(this.state.avatar)
   
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
                <img src={this.state.avatar!=null?this.state.avatar:img} className="nav-img" />
                <div style={{marginTop:'-17px',marginLeft:'40px'}} className={`text-success`} > <i style={{fontSize:'8px'}}  class="fas fa-xs pr-2 fa-circle"></i></div>
              </NavLink>:
              <NavLink
              to="/user/customer-profile" tag={Link}
            
              
              
            >
              <img src={this.state.avatar!=null?this.state.avatar:img} className="nav-img" />
              <div style={{marginTop:'-17px',marginLeft:'40px'}} className={`text-success`} > <i style={{fontSize:'8px'}}  class="fas pr-2 fa-xs fa-circle"></i></div>
            </NavLink>
  }
            </NavItem>
           
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
  profile:state.profile.profile

});

export default withRouter (connect(mapStateToProps,{logout})( NavBar));
