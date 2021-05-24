
import React, { Component } from "react";
import { findDOMNode } from 'react-dom'
import img from '../../assets/img/default-avatar.png'

import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import moment from 'moment'
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
import { AddAppointment } from '../../store/actions/appointmentActions'
import { AddJobRequest } from '../..//store/actions/jobActions'
import { compose } from "redux";

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};


class CurrentLocation extends React.Component {

  constructor(props) {
    super(props);


    const { lat, lng } = this.props.initialCenter;

    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount = () => {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }
  recenterMap = () => {
    const map = this.map;
    const current = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }
  loadMap = () => {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren = () => {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;

      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }


  render() {
    const style = Object.assign({}, mapStyles.map);

    // ...




    return (

      <>
        <div>
          <div style={style} ref="map">
            Loading map...
        </div>
          {this.renderChildren()}
        </div></>
    )
  }

}
CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};



// const mapStyles = {
//   width: '1000px',
//   height: '280px'
// };



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {


    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >

        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </CurrentLocation>

    )
  }
}

App = GoogleApiWrapper({
  apiKey: "AIzaSyAy71QTMhLmDd3HXjiKGRVysz6gWe1uzhY",

})(App);
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
      coverLetter: '',
      jobCoverLetter: '',
      amount: null,
      requested: false,
      providerId: '',
      appointmentDateString: "",
      appointmentTimeString: "",
      jobDateString: "",
      date: Date.now(),
      time: Date.now(),
      jobDate: Date.now(),
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
  handleDateChange = (date) => {
    this.setState({
      date: date,
      time: date,
      jobDate: date,

      appointmentDateString: moment(date).format('DD-MM-YYYY'),
      appointmentTimeString: moment(date).format('dd:hh:mm'),
      jobDateString: moment(date).format('YYYY-MM-DD'),
    })
  }


  componentDidMount = async () => {
    let id = this.props.match.params.id
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

  handleAppointment = async (e) => {
    e.preventDefault();
    const obj = {
      appointmentDate: this.state.appointmentDateString,
      appointmentTime: this.state.appointmentTimeString,
      coverLetter: this.state.coverLetter,
      providerId: this.props.match.params.id
    }
    this.setState({
      requested: true
    })

    await this.props.AddAppointment(obj)
    this.setState({
      requested: false,
      coverLetter: ''
    })


  }
  handleJobRequest = async (e) => {
    e.preventDefault()

    const obj = {
      sellerId: this.props.match.params.id,
      amount: this.state.amount,
      coverLetter: this.state.jobCoverLetter,
      jobDate: this.state.jobDateString
    }
    this.setState({
      requested: true
    })
    await this.props.AddJobRequest(obj)
    this.setState({
      requested: false,
      sellerId: '',
      amount: '',
      coverLetter: '',
      jobDate: this.state.jobDateString
    })
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
                      View Location
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
                      Send Job Request
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


                  <Form onSubmit={this.handleAppointment}>
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
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        required
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
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                        required
                      />
                    </MuiPickersUtilsProvider>

                    <Label className="font-weight-bold ">Cover Letter</Label>
                    <Input type="textarea" rows="6" value={this.state.coverLetter} onChange={this.handleChange} name="coverLetter" required />

                    <Alerts />

                    <Button className="btn-round mt-3" type="submit" color="warning">
                      {this.state.requested ? (
                        <Loader
                          type="TailSpin"
                          color="#fff"
                          height={20}
                          width={30}
                        />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Form>
                </Col>
              </TabPane>
              <TabPane className="text-center" tabId="3" id="following">
                <App />
              </TabPane>
              <TabPane className="text-center" tabId="4" id="following">
                <Col className="mx-auto" md={8}>


                  <Form onSubmit={this.handleJobRequest}>
                    <Label className="font-weight-bold">Job Request Details </Label>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker

                        fullWidth

                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Select Date"
                        minDate={this.state.jobDate}
                        value={this.state.jobDate}
                        varient="dialog"
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        required
                      />
                    </MuiPickersUtilsProvider>


                    <Label className="font-weight-bold ">Amount</Label>
                    <Input type="number" min="0" value={this.state.amount} onChange={this.handleChange} name="amount" required />

                    <Label className="font-weight-bold ">Cover Letter</Label>
                    <Input type="textarea" rows="6" value={this.state.jobCoverLetter} onChange={this.handleChange} name="jobCoverLetter" required />

                    <Alerts />

                    <Button className="btn-round mt-3" type="submit" color="warning">
                      {this.state.requested ? (
                        <Loader
                          type="TailSpin"
                          color="#fff"
                          height={20}
                          width={30}
                        />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Form>
                </Col>
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
export default compose(connect(mapStateToProps, { FetchProviders, AddJobRequest, FetchServices, AddAppointment }), withStyles(styles, { withTheme: true }))(PreviewProfile);
