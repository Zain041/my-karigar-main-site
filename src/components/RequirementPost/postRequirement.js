import React, { Component } from 'react'
import{  Container, Row ,Col,Card,Input,Button,Form,CardHeader }from 'reactstrap'
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import Alerts from '../../components/alerts/Alerts'

import {AddJob} from '../../store/actions/jobActions'


class postRequirement extends Component {
    constructor(props){
        super(props);
        this.state={
            category:"",
            description:"",
            title:"",
            budget:"",
            city:"",
            numOfDays:'',
            requested:false
        }
    }

    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    habdleSubmit= async (e)=>{
      e.preventDefault()

      var obj={
        category:this.state.category,
        description:this.state.description,
        title:this.state.title,
        budget:this.state.budget,
        city:this.state.city,
        numOfDays:this.state.numOfDays,
      }
      this.setState({
        requested:true,
        
      })

      await this.props.AddJob(obj)

      this.setState({
        requested:false,
        

      })
    }
    render() {
        return (
            <>
           <ProfilePageHeader />
           <Container style={{marginTop:'-30px'}}>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="bg-dark ">
                <h3 className="title  text-white font-weight-bold mx-auto">Requirement Details</h3>

                <Form className="p-3"
                
                onSubmit={this.habdleSubmit}
                >

                  
                 

                
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
                  <Input className="mt-3" name="title" value={this.state.title} onChange={this.handleChange}  placeholder="Job Title" type="text" required/>
                  <Input   className="mt-3"  type="select" name="city" value={this.state.city}  onChange={this.handleChange}  required>
                  <option value=""  disabled selected>Select City</option>
                  <option value="sialkot" >Sialkot</option>
                  <option value="gujrat">Gujrat</option>
                  <option value="lahore">Lahore</option>
                  <option value="gujranwala">Gujranwala</option>
                 
                  
         
                  </Input>
                  <Input className="mt-3" name="description" value={this.state.description} onChange={this.handleChange}  placeholder="Description" type="textarea" required/>
                  <Input className="mt-3" name="numOfDays" value={this.state.numOfDays} onChange={this.handleChange}  placeholder="Number of Days" type="number" min="0" required/>
                  <Input className="mt-3" name="budget" value={this.state.budget} onChange={this.handleChange}  placeholder="Budget" type="number" min="0" required/>
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
                          "Post"
                        )}
                  </Button>
                 
                </Form>
               

              </Card>
            </Col>
          </Row>
        </Container>
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile:state.profile.profile,
  notifications:state.notification.notifications

});

export default connect(mapStateToProps,{AddJob})( postRequirement)