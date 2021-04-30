
import React,{Component} from "react";
import img from '../../assets/img/default-avatar.png'

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Badge
} from "reactstrap";

// core components
import NavBar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";

import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import {FetchProviders} from '../../store/actions/profileActions'
import Alerts from "../../components/alerts/Alerts"



class PreviewProfile extends Component {
 

  constructor(props){
    super(props);
    this.state={
      activeTab:"1",
      email:"",
      modal:false,
      password:"",
      requested:false,
      fullName:"",
      phoneNumber:"",
      address:"",
      avatar:"",
      category:"",
      availableTimeStart:"",
      availableTimeEnd:"",
      experience:"",
      profileFile:"",
      previewUrl:"",
      about:"",
      inside:"g jnb"
    }
  }
 

   toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab:tab
      })
    }
  };

  
  handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }
 
  
  componentDidMount= async () => {
    var id=this.props.match.params.id
    console.log(id)

    // setInterval(() => {
     await  this.props.FetchProviders();
    // }, 1000);
let profile =this.props.providers.length!=0?this.props.providers.profiles.filter(item=>item._id==id):""
    
console.log("provider",profile)
    // let profile=JSON.parse(localStorage.getItem('profile'))
   

    setTimeout(() => {
      this.setState({
      
     
        fullName:profile[0].fullName,
        avatar:profile[0].avatar,
        phoneNumber:profile[0].phoneNumber,
        address:profile[0].address,
        city:profile[0].city,
        about:profile[0].about,
       
        category:profile[0].category,
        availableTimeStart:profile[0].availableTimeStart,
        availableTimeEnd:profile[0].availableTimeEnd,
        experience:profile[0].experience
  
      })
      
    }, 3000);
     
     
      
    

    
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  };

  handleSubmit=(e)=>{
   
  }
  render(){
    // if(this.props.auth.isAuthenticated){
    //   return <Redirect to="/auth/login"/>
    // }
    
   console.log(this.state)
    
  return (
    <>
   
      <NavBar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                height="150"
                width="150"
                className="img-circle img-no-padding img-responsive"
                src={this.state.avatar!=null?this.state.avatar:require("assets/img/faces/kaci-baum-2.jpg")}
              />
              
            </div>
            
            <div className="name">
              <h4 className=" font-weight-bold title">
              {
                this.state.fullName!=""?this.state.fullName:"Name Here"
              } <br />
              </h4>
              <h6 className=" font-weight-bold description">
                {this.state.category!=""?this.state.category:"Category Here"}
              </h6>
              <h6 className=" font-weight-bold description">
                Phone No: +92{this.state.phoneNumber!=""?this.state.phoneNumber:"Category Here"}
              </h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>

                {
                  this.state.about!=""?this.state.about:"About Here"
                }
                
              </p>
              
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                  style={{cursor:'pointer'}}
                    className={` font-weight-bold ${this.state.activeTab === "1" ? "active" : ""}`} 
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  style={{cursor:'pointer'}}
                    className={` font-weight-bold ${this.state.activeTab === "2" ? "active" : ""}`}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Ask for Appointment
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  style={{cursor:'pointer'}}
                    className={` font-weight-bold ${this.state.activeTab === "3" ? "active" : ""}`}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Request for Location
                  </NavLink>
                </NavItem>
               
               
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={this.state.activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          {/* <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          /> */}
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Chappal Making <br />
                            <small>We have best Hand Made Chapals </small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          {/* <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          /> */}
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Shoes Making <br />
                            <small>We Offer Best Hand Made Shoes</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Write your Enguiry Here</h3>
              <Button className="btn-round" color="warning">
                Submit
              </Button>
            </TabPane>
            <TabPane className="text-center" tabId="3" id="following">
              <h3 className="text-muted">Write your Enguiry Here</h3>
              <Button className="btn-round" color="warning">
                Submit
              </Button>
            </TabPane>
           
           
          </TabContent>
        </Container>
      </div>
     
    </>
  );
              }
}
const  mapStateToProps = (state) => ({
  auth:state.auth,
  providers: state.profile.providers,
  avatar:state.profile.avatar

});
export default connect(mapStateToProps,{FetchProviders})( PreviewProfile);
