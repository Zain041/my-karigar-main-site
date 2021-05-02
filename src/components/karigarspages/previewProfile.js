
import React, { Component } from "react";
import img from '../../assets/img/default-avatar.png'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker ,KeyboardTimePicker} from "@material-ui/pickers";
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
import NavBar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";

import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { FetchProviders } from '../../store/actions/profileActions'
import { AddServices, FetchServices, UpdateServices, DeleteServices } from '../../store/actions/servicesActions'
import Alerts from "../../components/alerts/Alerts"
import { compose } from "redux";



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

// reactstrap components


// core components




class PreviewProfile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      coverLetter:'',
      date:Date.now(),
      time:Date.now(),
      activeTab: "1",
      email: "",
      modal: false,
      password: "",
      requested: false,
      fullName: "",
      phoneNumber: "",
      address: "",
      avatar: "",
      category: "",
      availableTimeStart: "",
      availableTimeEnd: "",
      experience: "",
      profileFile: "",
      previewUrl: "",
      about: "",
      inside: "g jnb"
    }
  }


  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleDateChange= (date) => {
    this.setState({
      date:date
    })
  }


  componentDidMount = async () => {
    var id = this.props.match.params.id
    console.log(id)



    // setInterval(() => {
    await this.props.FetchProviders();
    await this.props.FetchServices(id)
    // }, 1000);
    let profile = this.props.providers.length != 0 ? this.props.providers.profiles.filter(item => item.user == id) : ""

    console.log("provider", profile)
    // let profile=JSON.parse(localStorage.getItem('profile'))


    setTimeout(() => {
      this.setState({


        fullName: profile[0].fullName,
        avatar: profile[0].avatar,
        phoneNumber: profile[0].phoneNumber,
        address: profile[0].address,
        city: profile[0].city,
        about: profile[0].about,

        category: profile[0].category,
        availableTimeStart: profile[0].availableTimeStart,
        availableTimeEnd: profile[0].availableTimeEnd,
        experience: profile[0].experience

      })

    }, 3000);






    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  };

  handleSubmit = (e) => {

  }
  render() {
    // if(this.props.auth.isAuthenticated){
    //   return <Redirect to="/auth/login"/>
    // }
		const { classes } = this.props;
   

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
                  src={this.state.avatar != null ? this.state.avatar : require("assets/img/faces/kaci-baum-2.jpg")}
                />

              </div>

              <div className="name">
                <h4 className=" font-weight-bold title">
                  {
                    this.state.fullName != "" ? this.state.fullName : "Name Here"
                  } <br />
                </h4>
                <h6 className=" font-weight-bold description">
                  {this.state.category != "" ? this.state.category : "Category Here"}
                </h6>
                <h6 className=" font-weight-bold description">
                  Phone No: +92{this.state.phoneNumber != "" ? this.state.phoneNumber : "Category Here"}
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>

                  {
                    this.state.about != "" ? this.state.about : "About Here"
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
                      style={{ cursor: 'pointer' }}
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
                      style={{ cursor: 'pointer' }}
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
                      style={{ cursor: 'pointer' }}
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
                  <Col className="ml-auto mr-auto" md="12">
                    <ul className="list-unstyled follows">
                      <li>
                        <Row>

                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            {this.props.services.length != 0 ? this.props.services.map((items, index) => {
                              return (
                                <>
                                  <h6>
                                    {items.title} <br />
                                    <small>{items.description} </small>
                                  </h6>
                                  <hr></hr>
                                </>
                              )
                            }) : <>
                              <Col className="ml-auto mr-auto mt-5" lg="7" md="4" xs="4">
                                <Loader
                                  type="TailSpin"
                                  color="red"
                                  height={20}
                                  width={30}
                                />
                              </Col>
                            </>}

                          </Col>
                         
                        </Row>
                      </li>
                     
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <Col className="mx-auto" md={8}>

               
               <Form>
                 <Label className="font-weight-bold">Appointment Details </Label>
                 
                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
       
       fullWidth
       
       format="MM/dd/yyyy"
       margin="normal"
       id="date-picker-inline"
       label="Select Date"
       value={this.state.date}
       varient="dialog"
       onChange={this.handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change date',
       }}
     />
</MuiPickersUtilsProvider>
<MuiPickersUtilsProvider className="mt-3" utils={DateFnsUtils}>
    <KeyboardTimePicker
       fullWidth
       varient="dialog"
       margin="normal"
       id="time-picker"
       label="Select Time"
       value={this.state.time}
       onChange={this.handleDateChange}
       KeyboardButtonProps = {{
         'aria-label': 'change time',
       }}
     />
</MuiPickersUtilsProvider>
  
                 <Label className="font-weight-bold ">Cover Letter</Label>
                 <Input  type="textarea" rows="6" name="coverLetter"/>
               <Button className="btn-round mt-3" color="warning">
                  Submit
              </Button>
               </Form>
               </Col>
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
const mapStateToProps = (state) => ({
  auth: state.auth,
  providers: state.profile.providers,
  avatar: state.profile.avatar,
  services: state.service.services

});
export default compose(  connect(mapStateToProps, { FetchProviders, FetchServices }),withStyles(styles, { withTheme: true }))(PreviewProfile);
