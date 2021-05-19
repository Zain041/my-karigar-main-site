import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Container,Col ,Row ,CardImg,Card, CardBody} from 'reactstrap'
import {SearchProviders} from '../../store/actions/profileActions'
import Button from 'reactstrap/lib/Button'
import '../../assets/css/mason.css'

import ProfilePageHeader from '../Headers/ProfilePageHeader'
import { Link } from 'react-router-dom'

 class Search extends Component {

    constructor(props) {
        super(props);
        this.state={
            category:'',
            city:''
        }
        
    }
    
 
  
    
  
     componentDidMount= async ()=>{
         
         const params = new URLSearchParams(this.props.location.search);
         // get the q param
         const category = await  params.get('category');
         const city = await  params.get('city');

         console.log("cat",category,"city",city)

         const obj={
             city:city,
             category:category
         }

        await  this.props.SearchProviders(obj)

         this.setState({
             category:category,
             city:city
         })
     }
    render() {
        const providers=this.props.searchResults.profiles
 
    console.log(providers)
        return (
            <>
              <ProfilePageHeader/>  
              <Container className="mt-5">
                  <Row>
                    {this.props.searchResults.length!=0? this.props.searchResults.map((items,index)=>{
                          return(
                            <Col md={4}>
                            <Card style={{minHeight:'530px'}}>
                               <CardImg style={{height:'250px'}} src={items.avatar!=null?items.avatar:"https://placeimg.com/150/150/any"}/>
                               <CardBody>
                               <div className={` icon-online  ${items.onlineStatus=="online"?"text-success":"text-secondary opacity-4"}`} > <i  class="fas pr-2 fa-circle"></i>{items.onlineStatus}</div>
                                   <h4 className="font-weight-bold mb-3">{items.fullName}</h4>
                                   <span className="text-dark font-weight-bold ">{items.category}</span><br></br>
                                   <Link to={`preview-profile/${items.user}`}><Button className="mt-3" >View Profile</Button></Link>
                                  
                               </CardBody>
                              
                            </Card>
                        </Col>
                          )
                              
                          
                      }):<div className="w-100 text-center">
                      
                      <span className="font-weight-bold font-italic">Providers Not Found !</span><br></br> <Link to="/"> <Button className="my-3" color="info">Go Back</Button></Link>
                      
                      </div>} 
                    
                  </Row>
              </Container>
            </>
        )
    }
}
const  mapStateToProps = (state) => ({
    auth:state.auth,
    profile: state.profile.profile,
    searchResults:state.profile.searchResults
  
  });
  export default connect(mapStateToProps,{SearchProviders})( Search);
  
