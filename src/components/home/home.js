
import React, { Component } from "react";
import { connect } from 'react-redux'
import img from '../../assets/img/default-avatar.png'
import moment from 'moment'
import Alerts from "../../components/alerts/Alerts"
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker ,KeyboardTimePicker} from "@material-ui/pickers";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  Label,
  InputGroupText,
  InputGroup,
  Container,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";
import Loader from "react-loader-spinner";

// core components
import NavBar from "components/Navbars/Navbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

import { Link } from "react-router-dom";
import { FetchJobs,SendJobOffer } from '../../store/actions/jobActions'
import { FetchCustomers } from '../../store/actions/profileActions'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      city: null,
      role: '',
      requested: false,
      modal: false,
      amount: '',
      offerCoverLetter: '',
      jobDate:Date.now(),
      jobDateString:"",
      buyerId:""
    }
  }
  handleDateChange= (date) => {
    console.log(date)
    this.setState({
     
      jobDate:date,
     
     
    
      jobDateString:moment(date).format('YYYY-MM-DD'),
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  modalToggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }



  componentDidMount = async () => {
    await this.props.FetchJobs()
    await this.props.FetchCustomers()

    var profile = JSON.parse(localStorage.getItem('profile'))

    await this.setState({
      role: profile.role
    })
  }

  handleOffer= async (e)=>{
    e.preventDefault()

    const obj={
      jobDate:this.state.jobDateString,
      coverLetter:this.state.offerCoverLetter,
      buyerId:this.state.buyerId,
      amount:this.state.amount

    }
    this.setState({
      requested:true
    })
    await this.props.SendJobOffer(obj)
   
    this.setState({
      requested:false,
      offerCoverLetter:'',
      amount:'',

    })
   
  }

  render() {

console.log(this.state.jobDateString)

    const a = '&';
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.modalToggle}>
          <ModalHeader toggle={this.modalToggle}>
            <span className="text-warning">Create Offer</span>
          </ModalHeader>
          <ModalBody>
            <Col>
              <Form onSubmit={this.handleOffer}>
                <Label className="font-weight-bold">Offer Details </Label><br></br>

                 
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker

fullWidth

format="MM/dd/yyyy"
margin="normal"
minDate={this.state.jobDate}
id="date-picker-inline"
label="Select Date"
value={this.state.jobDate}
varient="dialog"
onChange={this.handleDateChange}
KeyboardButtonProps = {{
'aria-label': 'change date',
}}
required
/>
</MuiPickersUtilsProvider>
                <Label className="font-weight-bold mt-3 ">Amount</Label>
                <Input type="number" min="0" value={this.state.amount} onChange={this.handleChange} name="amount" required />

                <Label className="font-weight-bold ">Cover Letter</Label>
                <Input type="textarea" rows="6" value={this.state.offerCoverLetter} onChange={this.handleChange} name="offerCoverLetter" required />

                <Alerts />




                <ModalFooter className="mt-3">
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
            </Col>
          </ModalBody>
        </Modal>
        <NavBar />
        <IndexHeader />
        <div className="main">
          {this.state.role == "customer" ? <div>
            <div className="section text-center">
              <Container>
                <Row>
                  <Col sm={{ size: '3', offset: '1' }}>

                    <FormGroup>

                      <Input type="select" name="category" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select Category</option>
                        <option value="mason" >Mason</option>
                        <option value="carpentor">Carpentor</option>
                        <option value="fabricator">Fabricator</option>
                        <option value="gardner">Gardner</option>
                        <option value="repairing&maintenance">Repairing & Maintenance</option>
                        <option value="plumber">Plumber</option>
                        <option value="painter">Painter</option>
                        <option value="electrician">Electrician</option>

                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="3">

                    <FormGroup>
                      <Input type="select" name="city" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select City</option>
                        <option value="sialkot" >Sialkot</option>
                        <option value="gujrat">Gujrat</option>
                        <option value="lahore">Lahore</option>
                        <option value="gujranwala">Gujranwala</option>



                      </Input>

                    </FormGroup>
                    {/* ${this.stae.category!=""?this.state.category:"demo"}${a}city=${this.stae.city!=""?this.state.city:"demo"} */}
                  </Col>
                  <Col className=" mr-auto pl-0 ml-0" sm="4">
                    <Link to={`/user/search?category=${this.state.category}${a}city=${this.state.city}`}><Button color="default" type="button" className="ml-0">
                      SEARCH
            </Button></Link>
                    <Link to="/user/post-requirements">
                      <Button color="default" type="button" className="ml-4">
                        POST YOUR REQUIREMENT
            </Button>
                    </Link>

                  </Col>


                </Row>

                <Row>
                  <Col className="ml-auto  mr-auto" md="8">
                    <h2 className=" font-weight-bold title">Featured Catagories</h2>
                    <h5 className="description">

                    </h5>
                    <br />
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Karigar's
            </Button>
                  </Col>
                </Row>
                <br />
                <br />
                <Row >
                  <Col className="shadow-sm rounded" md="3">
                    <div className=" info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="  img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/carpenter.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className="mb-4 pb-1 font-weight-bold info-title">Carpenters</h4>

                        <Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/painter-2.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className="mb-4 pb-1 font-weight-bold info-title">Painters</h4>

                        <Link to="/user/painter"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/gardner.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className=" mb-4 pb-1 font-weight-bold info-title">Gardners</h4>

                        <Link to="/user/gardner"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/fabricator.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className="mb-4 pb-1 font-weight-bold info-title">Fabricator</h4>

                        <Link to="/user/fabricator"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/electrician.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className=" mb-4 pb-1 font-weight-bold info-title">Electricians</h4>

                        <Link to="/user/electricians"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/plumber.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className=" mb-4 pb-1 font-weight-bold info-title">Plumber</h4>

                        <Link to="/user/plumber"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/mason.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className="  mb-4 pb-1 font-weight-bold info-title">Mason</h4>

                        <Link to="/user/mason"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="shadow-sm rounded" md="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <img
                          alt="..."
                          className="img-rounded img-responsive"
                          src={require("assets/img/Karigar-imgs/repair.jpg")}
                        />
                      </div>
                      <div className="description">
                        <h4 className=" font-weight-bold  info-title">Repairing & Maintenance</h4>

                        <Link to="/user/maintenance"><Button className="btn-link" color="info" href="#pablo">
                          View Karigar's
                </Button></Link>
                      </div>
                    </div>
                  </Col>
                </Row>

              </Container>
            </div>
          </div>


            :

            <>
              <Container>
                <h2 className=" font-weight-bold text-center title">Featured Jobs</h2>
                <Row>

                  <Col md={9} className="mx-auto">
                    {this.props.jobs.length != 0 ? this.props.jobs.map((items, index) => {

                      const date = moment(items.job.jobPostingDate).format('DD-MM-YYYY')



                      return (
                        <Card key={index} className="text-left text-secondary">
                          <Row>
                            <Col md={8} className="p-5" >
                              <Row>
                                <Col md={6}>
                                  <Label className="font-weight-bold">Title</Label><br></br>
                                  <p >{items.job.title}</p><br></br>

                                  <Label className="font-weight-bold">Description</Label>
                                  <p>{items.job.description}</p>
                                  <Label className="font-weight-bold">City</Label>
                                </Col>
                                <Col md={6}>
                                  <p>{items.city}</p>
                                  <Label className="font-weight-bold">Category</Label>
                                  <p>{items.job.category}</p>
                                  <Label className="font-weight-bold">Budget</Label>
                                  <p>{items.job.budget} &nbsp;PKR</p>
                                  <Label className="font-weight-bold">Posting Date</Label>
                                  <p>{date}</p>
                                </Col>
                     
                              </Row>

                              <Button onClick={()=>{

                                this.setState({
                                  buyerId:items.job.buyerId
                                })
                                this.modalToggle()}} color="warning">Send Offer</Button>


                            </Col>
                            <Col className="text-center align-self-center"  md={4} >
                      <img className="rounded-circle " height="50" width="50" src={items.buyer.avatar!=null?items.buyer.avatar:img}/>

                      <h4>{items.buyer.fullName}</h4>
                    </Col>

                          </Row>
                        </Card>
                      )
                    }) : < div className="mx-auto mt-5">

                      <p className="text-danger text-upercase font-weight-bold font-italic">No  Jobs  Found !</p>

                    </div>}

                  </Col>
                </Row>
              </Container>
            </>

          }

          <div style={{
            backgroundImage:
              "url(" + require("assets/img/banner1.PNG") + ")",
          }} className="section bg-dark landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className=" text-white font-weight-bold text-center">Keep in touch?</h2>
                  <Form className="contact-form">
                    <Row>
                      <Col md="6">
                        <label className="text-white">Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label className="text-white">Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label className="text-white">Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                      </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
  notifications: state.notification.notifications,
  jobs: state.jobs.jobs,
  customers: state.profile.customers

});


export default compose(  connect(mapStateToProps, { SendJobOffer,FetchJobs, FetchCustomers }),withStyles(styles, { withTheme: true }))(LandingPage);