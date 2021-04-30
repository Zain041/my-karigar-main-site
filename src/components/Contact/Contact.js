import React, { Component } from 'react'
// import{  Container, Row ,Col,Card,Input,Button,Form,CardHeader }from 'reactstrap'
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
  import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";




export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            category:"",
            description:"",
            title:"",
            budget:"",
            numOfDays:''
        }
    }
    render() {
        return (
            <>
           <ProfilePageHeader />
           <div className="section bg-dark landing-section">
          <Container  style={{marginTop:'-30px',position:'relative',zIndex:'100'}}>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className=" text-white font-weight-bold text-center">Contact Us</h2>
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
                  <label className="text-white">Query</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill " color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
                
            </>
        )
    }
}
