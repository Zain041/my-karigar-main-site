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
import React from "react";

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
  InputGroupText,
  InputGroup,
  Container,
  FormGroup,
  Row,
  Col,
} from "reactstrap";

// core components
import NavBar from "components/Navbars/Navbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <NavBar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
          <Row>
            <Col sm={{size:'3',offset:'1'}}>
              
              <FormGroup>
                <Input   placeholder="Enter Karigar Type" type="text" />
              </FormGroup>
            </Col>
            <Col sm="3">
              
              <FormGroup>
              <select className="   pl-0 pr-0 form-control">
  <option>Select City </option>
  <option>Default select</option>
</select>
              </FormGroup>
            </Col>
            <Col className=" mr-auto pl-0 ml-0" sm="4">
            <Button color="default"    type="button" className="ml-0">
                  SEARCH
                </Button>
                <Button color="default"  type="button"   className="ml-4">
                  POST YOUR REQUIREMENT
                </Button>
             
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
            <Row>
              <Col  className="shadow-sm rounded" md="3">
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
              <Col className="shadow-sm rounded"  md="3">
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
                  src={require("assets/img/Karigar-imgs/gardner.jpg")}
                />
                  </div>
                  <div className="description">
                    <h4 className=" mb-4 pb-1 font-weight-bold info-title">Gardners</h4>
                   
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
                  src={require("assets/img/Karigar-imgs/fabricator.jpg")}
                />
                  </div>
                  <div className="description">
                    <h4 className="mb-4 pb-1 font-weight-bold info-title">Fabricator</h4>
                   
                    <Button className="btn-link" color="info" href="#pablo">
                      View Karigar's
                    </Button>
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
                  src={require("assets/img/Karigar-imgs/plumber.jpg")}
                />
                  </div>
                  <div className="description">
                    <h4 className=" mb-4 pb-1 font-weight-bold info-title">Plumber</h4>
                   
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
                  src={require("assets/img/Karigar-imgs/mason.jpg")}
                />
                  </div>
                  <div className="description">
                    <h4 className="  mb-4 pb-1 font-weight-bold info-title">Mason</h4>
                   
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
                  src={require("assets/img/Karigar-imgs/repair.jpg")}
                />
                  </div>
                  <div className="description">
                    <h4 className=" font-weight-bold  info-title">Repairing & Maintenance</h4>
                   
                    <Button className="btn-link" color="info" href="#pablo">
                      View Karigar's
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
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
                      <label>Email</label>
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
                  <label>Message</label>
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
      <DemoFooter />
    </>
  );
}

export default LandingPage;
