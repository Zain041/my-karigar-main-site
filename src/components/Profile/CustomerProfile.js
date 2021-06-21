
import React, { Component } from "react";
import { connect } from "react-redux";
import GrayLogo from '../../assets/img/gray.png';
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Table,
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
  Badge,
  Card
} from "reactstrap";

import Loader from "react-loader-spinner";
import img from '../../assets/img/default-avatar.png'
import Alerts from '../../components/alerts/Alerts'
import { FetchOutgoingJobRequests,FetchIncomingOffers,AcceptJobOffers,RejectJobOffer, FetchOngoingJobsAsBuyer,FetchCompletedJobAsBuyer,FetchIncompletedJobAsBuyer, ChangeJobStatus, FetchRequestCompleteJobAsBuyer } from '../../store/actions/jobActions'
import StripeCheckout from "react-stripe-checkout";
// core components
import NavBar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";

import { Redirect } from "react-router";
import { fetchCurrentUserProfile, updateProfile,SendRatings, uploadProfile } from '../../store/actions/profileActions'
import { FetchAppointments } from '../../store/actions/appointmentActions'

import moment from 'moment'

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      method:"",
      city: "",
      email: "",
      modal: false,
      password: "",
      requested: false,
      requested2:false,
      fullName: "",
      phoneNumber: "",
      address: "",
      avatar: "",
      ratingsmodal:false,
      ratings:"",
      feedback:"",
      service:"",



      profileFile: "",
      previewUrl: "",
      about: "",
      id: "",
      _id:"",
      status:"",
      token:""
    }
  }


  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  };

  modalToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  ratingsToggle = () => {
    this.setState({
      ratingsmodal: !this.state.ratingsmodal
    });
  };

  handleFile = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
      previewUrl: URL.createObjectURL(e.target.files[0])
    })
  }




  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUploadImg = async (e) => {
    e.preventDefault();

    this.setState({
      requested: true
    })

    await this.props.uploadProfile(this.state.profileFile)
    this.props.fetchCurrentUserProfile()

    setTimeout(() => {
      this.setState({
        requested: false,
        avatar: this.props.profile.avatar

      })
      this.modalToggle()
    }, 3000);




  }


  componentDidMount = async () => {

    // setInterval(() => {
    await this.props.fetchCurrentUserProfile();
    await this.props.FetchAppointments()

    await this.props.FetchOutgoingJobRequests()
    await this.props.FetchOngoingJobsAsBuyer()
    await this.props.FetchRequestCompleteJobAsBuyer()

    await this.props.FetchCompletedJobAsBuyer()
    await this.props.FetchIncompletedJobAsBuyer()
    await this.props.FetchIncomingOffers()
    // }, 1000);

    const token=localStorage.getItem('token')

this.setState({
  token:token
})





    setTimeout(() => {
      this.setState({


        fullName: this.props.profile.fullName,
        id: this.props.profile.user,
        avatar: this.props.profile.avatar,
        phoneNumber: this.props.profile.phoneNumber,
        address: this.props.profile.address,
        city: this.props.profile.city,
        about: this.props.profile.about,

        category: this.props.profile.category,
        availableTimeStart: this.props.profile.availableTimeStart,
        availableTimeEnd: this.props.profile.availableTimeEnd,
        experience: this.props.profile.experience

      })

    }, 3000);
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  };

  handleCompleteJob= async (e)=>{
    e.preventDefault()
const statusObj={
  _id:this.state._id,
  status:this.state.status
}

const ratingsObj={
  receiver:this.state.id,
  feedback:this.state.feedback,
  rating:this.state.ratings,
  service:this.state.service,
}
this.setState({
  requested:true

})
if(this.state.ratings!="" && this.state.feedback!=""){ 

await this.props.SendRatings(ratingsObj)
  }

  await this.props.ChangeJobStatus(statusObj)
  this.setState({
    requested:false
  })
  
}
  render() {
    console.log(this.props.appointments)

    if (this.props.auth.isAuthenticated === false) {
      return <Redirect to="/auth/login" />
      
    }
    console.log("jobbbbb",this.props.buyerRequestCompleteJobs)
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

                  <img src={this.state.previewUrl != "" ? this.state.previewUrl : img} height="100" width="100" />
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
        {/* payments and ratings modal */}
        <Modal isOpen={this.state.ratingsmodal} toggle={this.ratingsToggle}>
          <ModalHeader toggle={this.ratingsToggle}>
            <span className="text-warning">Finalize</span>
          </ModalHeader>
          <ModalBody>
          <Form onSubmit={this.handleCompleteJob}>
          <Col className="mx-auto" md={8}>

               

 

<Label className="font-weight-bold ">Ratings</Label>
<Input type="select" name="ratings" onChange={this.handleChange} >
                        <option value="" disabled selected>Select Rating</option>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>



                      </Input>
  <Label className="font-weight-bold ">Feedback</Label>
  <Input  className="mb-3" type="textarea" rows="6" value={this.state.feedback} onChange={this.handleChange} name="feedback"/>

  <Alerts/>



</Col>





              <ModalFooter>
                
                <Button color="secondary" onClick={this.ratingsToggle}>
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
                  src={this.state.avatar != null ? this.state.avatar : require("assets/img/faces/kaci-baum-2.jpg")}
                />
                <div style={{ marginTop: '-30px', marginLeft: '77px' }} className={`text-success`} > <i class="fas pr-2 fa-circle"></i></div>
                <span onClick={this.modalToggle} class="text-socondary" style={{ cursor: 'pointer', fontWeight: 'normal' }} >
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
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "13" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("13");
                      }}
                    >
                      Incomplete Jobs<Badge className="ml-1 rounded-circle" color="danger">{this.props.buyerIncompleteJobs.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "1" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Completed Jobs<Badge className="ml-1 rounded-circle" color="danger">{this.props.buyerCompletedJobs.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "2" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Appointments<Badge className="ml-1 rounded-circle" color="success">{this.props.appointments.filter(item => item.customerId == this.state.id).length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "5" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("5");
                      }}
                    >
                      Sent Job Requests<Badge className="ml-1 rounded-circle" color="success">{this.props.outgoingRequests.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "6" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("6");
                      }}
                    >
                      Ongoing Jobs<Badge className="ml-1 rounded-circle" color="success">{this.props.buyerOngoingJobs.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "20" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("20");
                      }}
                    >
                      Job Offers<Badge className="ml-1 rounded-circle" color="success">{this.props.buyerOffers.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
                      className={` font-weight-bold ${this.state.activeTab === "7" ? "active" : ""}`}
                      onClick={() => {
                        this.toggle("7");
                      }}
                    >
                      Complete Job Requests<Badge className="ml-1 rounded-circle" color="success">{this.props.buyerRequestCompleteJobs.length}</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: 'pointer' }}
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
                      style={{ cursor: 'pointer' }}
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
              <TabPane className="text-center" tabId="5" id="following">
                <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.outgoingRequests.length != 0 ? this.props.outgoingRequests.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Description</Label>
                              <p>{items.request.coverLetter}</p>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Price</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No  Job Requests  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="20" id="following">
                <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.buyerOffers.length != 0 ? this.props.buyerOffers.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Cover Letter</Label>
                              <p>{items.request.coverLetter}</p>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Amount</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                              <Button 
                            onClick={ 
                         async ()=>{
                           const obj={
                             _id:items.request._id,
                            
                           }
                         
                          this.setState({
                            requested2:true
                          })

                          await this.props.RejectJobOffer(obj)
                          this.setState({
                            requested2:false
                          })

                        }
                      } 
                      className="btn-round mt-3 mr-2" color="danger">
              {this.state.requested ? (
                          <Loader
                            type="TailSpin"
                            color="#fff"
                            height={20}
                            width={30}
                          />
                        ) : (
                          "Reject Offer"
                        )}
              </Button>
              <Button
               onClick={ 
                         async ()=>{
                           const obj={
                             _id:items.request._id,
                            
                           }
                         
                          this.setState({
                            requested:true
                          })

                          await this.props.AcceptJobOffers(obj)
                          this.setState({
                            requested:false
                          })

                        }
                      }
                       className="btn-round mt-3" color="warning">
              {this.state.requested ? (
                          <Loader
                            type="TailSpin"
                            color="#fff"
                            height={20}
                            width={30}
                          />
                        ) : (
                          "Accept Offer"
                        )}
              </Button>
                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                      
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No  Job Requests  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="13" id="follows">
              <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.buyerIncompleteJobs.length != 0 ? this.props.buyerIncompleteJobs.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Status</Label><br></br>
                              <Badge color="primary">{items.request.status}</Badge><br></br>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Price</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                              


                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No Completed Jobs  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="1" id="follows">
              <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.buyerCompletedJobs.length != 0 ? this.props.buyerCompletedJobs.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Status</Label><br></br>
                              <Badge color="primary">{items.request.status}</Badge><br></br>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Price</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                              


                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No Completed Jobs  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <Table hover responsive>
                  <thead>
                    <tr>

                      <th>Date</th>
                      <th>Time</th>
                      <th>Cover Letter</th>
                      <th>Status</th>

                    </tr>
                  </thead>
                  <tbody>
                    {this.props.appointments.length != 0 ? this.props.appointments.filter(item => item.customerId == this.state.id).map((items, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{items.appointmentDate}</th>
                          <td>{items.appointmentTime}</td>
                          <td>{items.coverLetter}</td>
                          <td><Badge color={items.appointmentStatus == "pending" ? "secondary" : items.appointmentStatus == "approved" ? "success" : "danger"}>{items.appointmentStatus}</Badge></td>

                        </tr>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No Appointments  Found !</p>

                    </div>}


                  </tbody>
                </Table>
              </TabPane>
              <TabPane className="text-center" tabId="3" id="following">
                <h3 className="text-muted">Write your Enguiry Here</h3>
                <Button className="btn-round" color="warning">
                  Submit
              </Button>
              </TabPane>
              <TabPane className="text-center" tabId="6" id="following">
                <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.buyerOngoingJobs.length != 0 ? this.props.buyerOngoingJobs.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Status</Label><br></br>
                              <Badge color="primary">{items.request.status}</Badge><br></br>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Price</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                              <Button onClick={
                                async () => {
                                  const obj = {
                                    _id: items.request._id,
                                    status: "cancelled"
                                  }

                                  this.setState({
                                    requested: true
                                  })

                                  await this.props.ChangeJobStatus(obj)
                                  this.setState({
                                    requested: false
                                  })

                                }
                              } className="btn-round mt-3 mr-2" color="danger">
                                {this.state.requested ? (
                                  <Loader
                                    type="TailSpin"
                                    color="#fff"
                                    height={20}
                                    width={30}
                                  />
                                ) : (
                                  "cancel"
                                )}
                              </Button>


                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No Ongoing Jobs  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="7" id="following">
                <Row>
                  <Col md={9} className="mx-auto">
                    {this.props.buyerRequestCompleteJobs.length != 0 ? this.props.buyerRequestCompleteJobs.map((items, index) => {

                      const date = moment(items.request.jobDate).format('DD-MM-YYYY')
                      const method=localStorage.getItem('method')
                      return (
                        <Card key={index} className="text-left">
                          <Row>
                            <Col md={8} className="p-4" >
                              <Label className="font-weight-bold">Status</Label><br></br>
                              <Badge color="primary">{items.request.status}</Badge><br></br>

                              <Label className="font-weight-bold">Date</Label>
                              <p>{date}</p>
                              <Label className="font-weight-bold">Price</Label>
                              <p>{items.request.amount} &nbsp;PKR</p>
                              <p>{items.request.jobTime} &nbsp;PM</p>
                      <Label className="font-weight-bold">Service</Label>
                      <p>{items.request.service}</p>

                              <Input className="mb-3 mt-3" type="select" name="method" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select Payment Method</option>
                        <option value="cashondelivery" >Cash On Delivery</option>
                        <option value="paynow">Pay Now</option>
                       



                      </Input>
                              <Button onClick={
                                async () => {
                                  const obj = {
                                    _id: items.request._id,
                                    status: "ongoing"
                                  }

                                  this.setState({
                                    requested: true
                                  })

                                  await this.props.ChangeJobStatus(obj)
                                  this.setState({
                                    requested: false
                                  })

                                }
                              } className="btn-round mt-3 mr-2" color="danger">
                                {this.state.requested ? (
                                  <Loader
                                    type="TailSpin"
                                    color="#fff"
                                    height={20}
                                    width={30}
                                  />
                                ) : (
                                  "Give Revision"
                                )}
                              </Button>
                              
                              <Button 
                              disabled={this.state.method==""}
                              
                              onClick={
                               () => {
                                  this.setState(  {
                                    _id: items.request._id,
                                    status: "completed",
                                    id:items.request.sellerId,
                                    service:items.request.service
                                  })

                                  this.ratingsToggle()

                                 

                                }
                              } className="btn-round mt-3" color="warning">
                                {this.state.requested ? (
                                  <Loader
                                    type="TailSpin"
                                    color="#fff"
                                    height={20}
                                    width={30}
                                  />
                                ) : (
                                  " Mark Completed"
                                )}
                              </Button>
                              <div className="m-3">
                              <StripeCheckout
                             
			label="Pay Now"
			name="My Karigar"
      disabled={this.state.method!="paynow"}
		
			image={GrayLogo}
			description={`Your Toal bill is ${items.request.amount}`}
			panelLabel="Pay Now"
			token={this.state.token}
			stripeKey="pk_test_51IrqDTFuBa5OIRk5qdMHNLHoSH3SaZY07gSuTvIqDl1J3KbELgLU5nJAPj7LfE4SqzpPt7PO0UxcB0NDL4g1C7r500UBxsi1Ct"
		/>
                 </div>           


                            </Col>
                            <Col className="text-center" style={{ borderLeft: '2px solid #F1EAE0' }} md={4} >
                              <img className="rounded-circle" height="50" width="50" src={items.seller.avatar != null ? items.seller.avatar : img} />

                              <h4>{items.seller.fullName}</h4>
                            </Col>
                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No Complete Job Requests  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="4" id="following">

                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Card className="bg-dark ">
                        <h3 className="title  text-white font-weight-bold mx-auto">Edit Profile</h3>

                        <Form className="p-3" onSubmit={async (e) => {
                          e.preventDefault();

                          console.log("inside submit")


                          this.setState({
                            inside: "helllooo",

                            requested: true
                          })

                          var obj = {
                            fullName: this.state.fullName,
                            phoneNumber: this.state.phoneNumber,
                            address: this.state.address,
                            city: this.state.city,
                            about: this.state.about,

                            category: this.state.category,
                            availableTimeStart: this.state.availableTimeStart,
                            availableTimeEnd: this.state.availableTimeEnd,
                            experience: this.state.experience
                          }
                          await this.props.updateProfile(obj)
                          this.props.fetchCurrentUserProfile()

                          setTimeout(() => {
                            this.setState({
                              requested: false,


                              fullName: this.props.profile.fullName,
                              avatar: this.props.profile.avatar,
                              phoneNumber: this.props.profile.phoneNumber,
                              address: this.props.profile.address,
                              city: this.props.profile.city,
                              about: this.props.profile.about,

                              category: this.props.profile.category,
                              availableTimeStart: this.props.profile.availableTimeStart,
                              availableTimeEnd: this.props.profile.availableTimeEnd,
                              experience: this.props.profile.experience

                            })

                          }, 3000);

                        }}>

                          <Input className="mt-3" name="fullName" value={this.state.fullName} onChange={this.handleChange} placeholder="Full Name" type="text" required />


                          <Input className="mt-3" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone No" type="text" required />



                          <Input className="mt-3" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address......" type="textarea" required />
                          <Input className="mt-3" type="select" name="city" onChange={this.handleChange} required>
                            <option value="" disabled selected>Select City</option>
                            <option value="sialkot" >Sialkot</option>
                            <option value="gujrat">Gujrat</option>
                            <option value="lahore">Lahore</option>
                            <option value="gujranwala">Gujranwala</option>



                          </Input>
                          <Input className="mt-3" name="about" value={this.state.about} onChange={this.handleChange} placeholder="Tell People About Yourself And Work....." type="textarea" required />
                          <Alerts className="mt-3 mb-3" />

                          <Button type="submit" block className=" mt-3 btn-round" color="secondary">
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
  avatar: state.profile.avatar,
  appointments: state.appointment.appointments,
  outgoingRequests: state.jobs.outgoingRequests,
  buyerOngoingJobs: state.jobs.buyerOngoingJobs,
  buyerRequestCompleteJobs: state.jobs.buyerRequestCompleteJobs,
  buyerIncompleteJobs:state.jobs.buyerIncompleteJobs,
  buyerCompletedJobs:state.jobs.buyerCompletedJobs,
  buyerOffers:state.jobs.buyerOffers


});
export default connect(mapStateToProps, {FetchIncomingOffers,SendRatings,AcceptJobOffers,RejectJobOffer, FetchCompletedJobAsBuyer,FetchIncompletedJobAsBuyer,FetchRequestCompleteJobAsBuyer, ChangeJobStatus, FetchOngoingJobsAsBuyer, updateProfile, fetchCurrentUserProfile, uploadProfile, FetchAppointments, FetchOutgoingJobRequests })(CustomerProfile);
;
