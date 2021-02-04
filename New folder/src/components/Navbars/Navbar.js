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

class  NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      navbarColor:"navbar-transparent",
     
      navbarCollapse:false,
      color:'',
      border:''
     


    }
  }
  // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  // const [navbarCollapse, setNavbarCollapse] = React.useState(false);

   toggleNavbarCollapse = () => {
     this.setState({
       navbarCollapse:!false,
       color:"default",
       border:""
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
      
      })
     
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor:"navbar-transparent",
       

      })
     
     
    }
  };

componentDidMount=() => {
   

    window.addEventListener("scroll", this.updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor);
    };
  };
  render(){ 
  return (
    <Navbar
      className={classnames("fixed-top", this.state.navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
           
            tag={Link}
          >
            MY KARIGAR
          </NavbarBrand>
          <button
            aria-expanded={this.state.navbarCollapse}
            className={classnames(" navbar-toggler", {
              toggled: this.state.navbarCollapse,
            })}
            onClick={this.toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={this.state.navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/" tag={Link}>
              
                 Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Karigar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Carpentor
                </DropdownItem>
                <DropdownItem>
                  Plumber
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
              to="/about" tag={Link}
               
                target="_blank"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              to="/services" tag={Link}
               
                target="_blank"
               
              >
               Services
           
              </NavLink>
            </NavItem>
            
            <NavItem>

              <NavLink
                to="/contact" tag={Link}
              
                target="_blank"
                
              >
                
                contact
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink
               
              className=" mb-0 pb-0 pt-0"
                target="_blank"
                title="Login Here"
              >
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
                <Link to="/login">
                <Button size="sm" className="btn-round  ml-1 mt-0 mb-0" color="primary"
                  outline  type="button">
                 
                  LOGIN
                </Button>
                </Link>
              </NavLink>
            </NavItem>
            
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
          }
}

export default NavBar;
