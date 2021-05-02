
import React,{Component} from "react";
import img from '../../assets/img/default-avatar.png'
import '../../assets/css/providerProfile.css'

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
import DemoFooter from "components/Footers/DemoFooter.js";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import {fetchCurrentUserProfile,updateProfile,uploadProfile} from '../../store/actions/profileActions'
import {AddServices,FetchServices,UpdateServices,DeleteServices} from '../../store/actions/servicesActions'
import Alerts from "../../components/alerts/Alerts"
import { Redirect } from "react-router";


class ProviderProfile extends Component {
 

  constructor(props){
    super(props);
    this.state={
      id:'',
      editModal:false,
      deleteModal:false,
      title:'',
      description:'',
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
  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  editToggle = () => {
    this.setState({
      editModal: !this.state.editModal,
    });
  };
  deleteToggle = () => {
    this.setState({
      deleteModal: !this.state.deleteModal,
    });
  };
  
  handleFile=(e)=>{
    this.setState({
      [e.target.name]:e.target.files[0],
      previewUrl:URL.createObjectURL(e.target.files[0])
    })
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
  handleUploadImg= async (e)=>{
    e.preventDefault();

    this.setState({
      requested:true
    })

   await  this.props.uploadProfile(this.state.profileFile)
   this.props.fetchCurrentUserProfile()
   setTimeout(() => {
    this.setState({
      requested:false,
      avatar:this.props.profile.avatar,
    })
    this.modalToggle();
     
   }, 3000);
     
   
  }
  handleServices= async (e)  =>{
    e.preventDefault()

    let user= JSON.parse(localStorage.getItem('user'))
    console.log(user._id)
    const obj={
      title:this.state.title,
      description:this.state.description
    }
    this.setState({
      requested:true
    })
    await this.props.AddServices(obj,user._id);
    this.setState({
      requested:false,
      title:'',
      description:'',
    })
  }
  
  componentDidMount= async () => {
    let user= JSON.parse(localStorage.getItem('user'))
    console.log(user._id)

    // setInterval(() => {
     await  this.props.fetchCurrentUserProfile();
     await this.props.FetchServices(user._id)
    // }, 1000);

    

    // let profile=JSON.parse(localStorage.getItem('profile'))
   

    setTimeout(() => {
      this.setState({
      
     
        fullName:this.props.profile.fullName,
        avatar:this.props.profile.avatar,
        phoneNumber:this.props.profile.phoneNumber,
        address:this.props.profile.address,
        city:this.props.profile.city,
        about:this.props.profile.about,
       
        category:this.props.profile.category,
        availableTimeStart:this.props.profile.availableTimeStart,
        availableTimeEnd:this.props.profile.availableTimeEnd,
        experience:this.props.profile.experience
  
      })
      
    }, 3000);
     
     
      
    

    
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  };
  updateService= async (e)=>{
    e.preventDefault()
    let user= JSON.parse(localStorage.getItem('user'))
    console.log(user._id)
    const obj={
      title:this.state.title,
      description:this.state.description,
      id:this.state.id
    }
    this.setState({
      requested:true
    })
    await this.props.UpdateServices(obj,user._id);
    this.editToggle()
    this.setState({
      requested:false,
      title:'',
      description:'',
      id:''
    })

  }

  DeleteService= async ()=>{
    let user= JSON.parse(localStorage.getItem('user'))
    this.setState({
      requested:true
    })
    await this.props.DeleteServices(this.state.id,user._id)
    this.setState({
      requested:false
    })
    this.deleteToggle()


  }
 
  
  render(){
    // if(this.props.auth.isAuthenticated){
    //   return <Redirect to="/auth/login"/>
    // }
    
   console.log(this.props.services)
    
  return (
    <>
    {/* modal for change profile */}
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
    {/* edit service modal */}
    <Modal isOpen={this.state.editModal} toggle={this.editToggle}>
                <ModalHeader toggle={this.EditToggle}>
                <h3 className="font-weight-bold p-4">Edit  Service</h3>
                </ModalHeader>
                <ModalBody>
                          
                          <Form className="p-4" onSubmit={this.updateService}>
                            <Label className="mb-3 mt-3 font-weight-bold" >
                              Title
                             
                            </Label>
                            <Input
                           placeholder="Title Here..."
                                onChange={this.handleChange}
                                type="text"
                                value={this.state.title}
                                name="title"
                                required
                              />
                               <Label className="mb-3 mt-3 font-weight-bold" >
                              Description
                             
                            </Label>
                            <Input
                            placeholder="Description Here...."
                                onChange={this.handleChange}
                                type="textarea"
                                rows="4"
                                value={this.state.description}
                                name="description"
                                required
                              />
                              {this.state.title}
                              {this.state.description}
                              <Alerts/>
                            
                        
                        
                    
                    
                    
                   
                   
                   
                    <ModalFooter className="mt-3">
                      <Button  className="mt-2" color="secondary" onClick={this.editToggle}>
                        cancel
                      </Button>{" "}
                      <Button color="primary"
                      type="submit"
                      className="mt-2"
                      
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
                          "Save"
                        )}
                      </Button>
                    </ModalFooter>
                  </Form>
                </ModalBody>
              </Modal>
              {/* delete modal */}
              <Modal isOpen={this.state.deleteModal} toggle={this.deleteToggle}>
                <ModalHeader toggle={this.EditToggle}>
                <h3 className="font-weight-bold p-4">Delete   Service</h3>
                </ModalHeader>
                <ModalBody>
                   <h4 className="font-weight-bold text-danger text-center">Are you Sure You Want To Delete Item !</h4>
                   
                  
                    <ModalFooter className="mt-3">
                      <Button className="mt-2" color="secondary" onClick={this.deleteToggle}>
                        cancel
                      </Button>{" "}
                      <Button color="danger"
                       className="mt-2"
                      onClick={this.DeleteService}
                      
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
                          "Delete"
                        )}
                      </Button>
                    </ModalFooter>
                  
                </ModalBody>
              </Modal>
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
                src={this.state.avatar!=""?this.state.avatar:require("assets/img/faces/kaci-baum-2.jpg")}
              />
               <div style={{marginTop:'-30px',marginLeft:'77px'}} className={`text-success`} > <i  class="fas pr-2 fa-circle"></i></div>
              <span onClick={this.modalToggle} class="text-socondary" style={{cursor:'pointer',fontWeight:'normal'}} >
            <i class="fas fa-user-edit"></i> Change Profile
            </span>
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
                    Manage  Appointments
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
                    Manage Location
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
                    Active Jobs <Badge href="#" className="ml-1 rounded-circle" color="danger">3</Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  style={{cursor:'pointer'}}
                    className={` font-weight-bold ${this.state.activeTab === "5" ? "active" : ""}`}
                    onClick={() => {
                      this.toggle("5");
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
                <Col className="ml-auto mr-auto" md="12">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                      <Col  className="ml-auto mr-auto " lg="6" md="6" xs="12">
                         <h3 className="font-weight-bold  mt-5 mb-3">Services</h3>
                         <div className="scrol">
                        {this.props.services.length!=0?this.props.services.map((items,index)=>{
                          return(
                           
                               <>
                            <h6>
                              {items.title}<br />
                              <small>{items.description} </small><span className="pr-3" style={{float:'right'}}><i onClick={()=>{
                                this.setState({
                                  title:items.title,
                                  description:items.description,
                                  id:items._id
                                })
                                this.editToggle()
                                
                                }} style={{cursor:'pointer'}} className="fas fa-edit text-success mr-2"></i> <i onClick={()=>{
                                  
                                  this.setState({
                                    id:items._id
                                  })
                                  this.deleteToggle()}} style={{cursor:'pointer'}} className="fas fa-trash text-danger"></i></span>
                            </h6>
                            <hr></hr>
                            </>
                           
                         
                          )
                        }):<Col className="ml-auto mr-auto text-center" lg="6" md="6" xs="12"> <Loader
                        type="TailSpin"
                        color="red"
                        height={20}
                        width={30}
                      />
                      </Col>}
                      </div>
                      </Col>
                      
                       
                       
                       
                        <Col style={{borderLeft:'2px solid #F1EAE0'}} className="ml-auto mr-auto" lg="6" md="6" xs="12">
                          <Card>
                          <h3 className="font-weight-bold p-4">Add New Service</h3>
                          <Form className="p-4" onSubmit={this.handleServices}>
                            <Label className="mb-3 mt-3 font-weight-bold" >
                              Title
                             
                            </Label>
                            <Input
                           placeholder="Title Here..."
                                onChange={this.handleChange}
                                type="text"
                                value={this.state.title}
                                name="title"
                                required
                              />
                               <Label className="mb-3 mt-3 font-weight-bold" >
                              Description
                             
                            </Label>
                            <Input
                            placeholder="Description Here...."
                                onChange={this.handleChange}
                                type="textarea"
                                rows="4"
                                value={this.state.description}
                                name="description"
                                required
                              />
                              <Alerts/>
                              <Button className="mt-3" color="danger" type="submit">
                              {this.state.requested ? (
                          <Loader
                            type="TailSpin"
                            color="#fff"
                            height={20}
                            width={30}
                          />
                        ) : (
                          "Add"
                        )}
                              </Button>
                          </Form>
                          </Card>
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
              <h3 className="text-muted">Write your Enguiry Here</h3>
              <Button className="btn-round" color="warning">
                Submit
              </Button>
            </TabPane>
            <TabPane className="text-center" tabId="5" id="following">
             
              <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card  style={{
          backgroundImage:
            "url(" + require("assets/img/banner1.PNG") + ")",
        }} className="bg-dark ">
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
                      this.props.fetchCurrentUserProfile()

                    setTimeout(() => {
                     
                      this.setState({
                          requested:false,
     
                        fullName:this.props.profile.fullName,
                        avatar:this.props.profile.avatar,
                        phoneNumber:this.props.profile.phoneNumber,
                        address:this.props.profile.address,
                        city:this.props.profile.city,
                        about:this.props.profile.about,
                       
                        category:this.props.profile.category,
                        availableTimeStart:this.props.profile.availableTimeStart,
                        availableTimeEnd:this.props.profile.availableTimeEnd,
                        experience:this.props.profile.experience
                  
                      })
                      
                    }, 3000);
                  
                   
                }}>

                  <Input className="mt-3" name="fullName" value={this.state.fullName} onChange={this.handleChange}  placeholder="Full Name" type="text" required />
                 

                  <Input className="mt-3" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}  placeholder="Phone No" type="text" required />

          

                  <Input className="mt-3" name="address" value={this.state.address} onChange={this.handleChange}  placeholder="Address......" type="textarea" required/>
                  <Input className="mt-3" name="about" value={this.state.about} onChange={this.handleChange}  placeholder="Tell People About Yourself And Work....." type="textarea" required/>
                  <Input className="mt-3" name="category" value={this.state.category} onChange={this.handleChange}  placeholder="Category" type="select" required>
                    <option value="" disabled selected>Select Category</option>
                    <option value="plumber">Plumber</option>
                    <option value="carpentor">Carpentor</option>
                    <option value="mason">Mason</option>
                    <option value="fabricator">Fabricator</option>
                    <option value="painter">Painter</option>
                    <option value="electrician">Electrician</option>
                    <option value="gardner">Gardner</option>
                    <option value="repairing&maintenance">Repairing&Maintenance</option>
                  </Input>
                  <Input className="mt-3" name="experience" value={this.state.experience} onChange={this.handleChange}  placeholder="Experience" type="text" required/>
                  <Input className="mt-3" name="city" value={this.state.city} onChange={this.handleChange}  placeholder="City" type="text" required/>
                  <Input className="mt-3" name="availableTimeStart" value={this.state.availableTimeStart} onChange={this.handleChange}  placeholder="Available Time Start" type="text" required/>
                  <Input className="mt-3" name="availableTimeEnd" value={this.state.availableTimeEnd} onChange={this.handleChange}  placeholder="Available Time End" type="text" required/>
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
  avatar:state.profile.avatar,
  services:state.service.services

});
export default connect(mapStateToProps,
  {updateProfile,
  fetchCurrentUserProfile,
  uploadProfile,AddServices,
  UpdateServices,
  DeleteServices,
  FetchServices}
  )( ProviderProfile);
