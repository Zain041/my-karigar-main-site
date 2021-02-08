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
import { connect } from "react-redux";

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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  Badge ,
  Card
} from "reactstrap";

import Loader from "react-loader-spinner";
import img from '../../assets/img/default-avatar.png'
import Alerts from '../../components/alerts/Alerts'

// core components
import NavBar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Redirect } from "react-router";
import {fetchCurrentUserProfile,updateProfile,uploadProfile} from '../../store/actions/profileActions'

class CustomerProfile extends Component {
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
     
     
     
      profileFile:"",
      previewUrl:"",
      about:"",
    }
  }
  

   toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab:tab
      })
    }
  };

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  
  handleFile=(e)=>{
    this.setState({
      [e.target.name]:e.target.files[0],
      previewUrl:URL.createObjectURL(e.target.files[0])
    })
  }

  

  
  handleChange=(e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }
  handleUploadImg=async (e)=>{
    e.preventDefault();

    this.setState({
      requested:true
    })

    await  this.props.uploadProfile(this.state.profileFile)
      let profile=JSON.parse(localStorage.getItem('profile'))
      
          this.setState({
            requested:false,
            avatar:profile.avatar
    
          })       
      this.modalToggle()
    
    
    
    }

  
  componentDidMount=() => {

    // setInterval(() => {
      this.props.fetchCurrentUserProfile();
    // }, 1000);

    

    let profile=JSON.parse(localStorage.getItem('profile'))
   

    
     
      this.setState({
      
     
        fullName:profile.fullName!=null?profile.fullName:"",
        avatar:profile.avatar!=null?profile.avatar:"",
        phoneNumber:profile.phoneNumber!=null?profile.phoneNumber:"",
        address:profile.address!=null?profile.address:"",
        city:profile.city!=null?profile.city:"",
        about:profile.about!=null?profile.about:"",
       
        category:profile.category!=null?profile.category:"",
        availableTimeStart:profile.availableTimeStart!=null?profile.availableTimeStart:"",
        availableTimeEnd:profile.availableTimeEnd!=null?profile.availableTimeEnd:"",
        experience:profile.experience!=null?profile.experience:""
  
      })
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  };
  render(){
   
    if(this.props.auth.isAuthenticated===false){
      return <Redirect to="/auth/login"/>
    }
    // var profile= JSON.parse(localStorage.getItem('profile'))
    // if (this.props.auth.isAuthenticated && profile.role==="provider" ) {
    //   return <Redirect to="/user/provider-profile"/>
    
    // }else if(this.props.auth.isAuthenticated && profile.role==="customer"){
    //   return <Redirect to="/user/customer-profile"/>

    // }
  return (
    <>
      <NavBar />
      <Modal isOpen={this.state.modal} toggle={this.modalToggle}>
                <ModalHeader toggle={this.modalToggle}>
                  <span className="text-warning">Upload Photo Here</span>
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleUploadImg}>
                    <Row className="mt-4 mb-4">
                      <Col size="6">
                      <Input
                      className="mt-2"
                      type="file"
                      onChange={this.handleFile}
                      id="myFile"
                      name="profileFile"
                      required
                     
                      
                    /><br></br>
                      </Col>
                      <Col size="6">

                        <img src={this.state.previewUrl!=""?this.state.previewUrl:img} height="100" width="100"/>
                      </Col>
                    </Row>
                    
                    
                   
                   
                   
                    <ModalFooter>
                      <Button color="secondary" onClick={this.modalToggle}>
                        cancel
                      </Button>{" "}
                      <Button color="primary"
                      type="submit"
                      
                      // disabled={this.state.filesUrl.length<5}
                      >
                        {this.state.requested ? (
                          <Loader
                            type="TailSpin"
                            color="#fff"
                            height={20}
                            width={30}
                          />
                        ) : (
                          "save"
                        )}
                      </Button>
                    </ModalFooter>
                  </Form>
                </ModalBody>
              </Modal>

    {/* end */}
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
                src={this.state.avatar!=""?this.state.avatar:require("assets/img/faces/kaci-baum-2.jpg")}
              />
              <span onClick={this.modalToggle} class="text-socondary" style={{cursor:'pointer',fontWeight:'normal'}} >
            <i class="fas fa-user-edit"></i> Change Profile
            </span>
            
            </div>
            <div className="name">
              <h4 className=" font-weight-bold title">
                {this.state.fullName} <br />
              </h4>
              <h6 className=" font-weight-bold description">Phone No: +92{this.state.phoneNumber}</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p className="font-weight-normal">
               {this.state.about}
              </p>
              <br />
              
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
                    Jobs<Badge className="ml-1 rounded-circle" color="danger">3</Badge>
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
                    Appointments<Badge  className="ml-1 rounded-circle" color="success">4</Badge>
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
                    Location
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  style={{cursor:'pointer'}}
                    className={` font-weight-bold ${this.state.activeTab === "4" ? "active" : ""}`}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    Edit Profile
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
            <TabPane className="text-center" tabId="4" id="following">
             
             <Container>
         <Row>
           <Col className="ml-auto mr-auto" lg="8">
             <Card className="bg-dark ">
               <h3 className="title  text-white font-weight-bold mx-auto">Edit Profile</h3>

               <Form className="p-3" onSubmit={async (e)=>{
                  e.preventDefault();

                  console.log("inside submit")
                 

                  this.setState({
                    inside:"helllooo",
                    
                    requested:true
                  })
              
                  var obj={
                    fullName:this.state.fullName,
                      phoneNumber:this.state.phoneNumber,
                      address:this.state.address,
                      city:this.state.city,
                      about:this.state.about,
                     
                      category:this.state.category,
                      availableTimeStart:this.state.availableTimeStart,
                      availableTimeEnd:this.state.availableTimeEnd,
                      experience:this.state.experience
                  }
                   await this.props.updateProfile(obj)
                 
                  this.setState({
                   requested:false,
                   fullName:"",
                   phoneNumber:"",
                   address:"",
                   city:"",
                   about:"",
                  
                   category:"",
                   availableTimeStart:"",
                   availableTimeEnd:"",
                   experience:""
                  })
               }}>

                 <Input className="mt-3" name="fullName" value={this.state.fullName} onChange={this.handleChange}  placeholder="Full Name" type="text" required />
                

                 <Input className="mt-3" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Phone No" type="text" required />

         

                 <Input className="mt-3" name="address" value={this.state.address} onChange={this.handleChange}  placeholder="Address......" type="textarea" required/>
                 <Input className="mt-3" name="about" value={this.state.about} onChange={this.handleChange}  placeholder="Tell People About Yourself And Work....." type="textarea" required/>
          <Alerts className="mt-3 mb-3"/>
                
                 <Button  type="submit" block className=" mt-3 btn-round" color="secondary">
                 {this.state.requested ? (
                         <Loader
                           type="TailSpin"
                           color="#fff"
                           height={20}
                           width={30}
                         />
                       ) : (
                         "Update"
                       )}
                 </Button>
                
               </Form>
              

             </Card>
           </Col>
         </Row>
       </Container>
            
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
  profile: state.profile.profile,
  avatar:state.profile.avatar

});
export default connect(mapStateToProps,{updateProfile,fetchCurrentUserProfile,uploadProfile})( CustomerProfile);
  ;
