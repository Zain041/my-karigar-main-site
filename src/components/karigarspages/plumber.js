import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Container,Col ,Row ,CardImg,Card, CardBody} from 'reactstrap'
import {FetchProviders} from '../../store/actions/profileActions'
import Button from 'reactstrap/lib/Button'
import '../../assets/css/mason.css'

import ProfilePageHeader from '../Headers/ProfilePageHeader'
import { Link ,Redirect} from 'react-router-dom'

 class Plumber extends Component {
    constructor(props) {
        super(props);
        this.state={
            role:"",
        }
    }
     componentDidMount=()=>{
         this.props.FetchProviders()
         const profile=JSON.parse(localStorage.getItem('profile'))

         this.setState({
             role:profile.role
         })
     }
    render() {
        if (this.state.role=="provider"){
            return <Redirect to="/user/home"/>
        }
        console.log(this.props.providers)
        const providers=this.props.providers.length!=0?this.props.providers.profiles.filter(item=>item.status=="accepted" && item.category=="plumber"):""
        return (
            <>
              <ProfilePageHeader/>  
              <Container className="mt-5">
                  <Row>
                    {providers.length!=0? providers.map((items,index)=>{
                          return(
                            <Col md={4}>
                            <Card style={{minHeight:'530px'}}>
                               <CardImg style={{height:'250px'}} src={items.avatar!=null?items.avatar:"https://placeimg.com/150/150/any"}/>
                               <CardBody>
                               <div className={` icon-online  ${items.onlineStatus=="online"?"text-success":"text-secondary opacity-4"}`} > <i  class="fas pr-2 fa-circle"></i>{items.onlineStatus}</div>
                                   <h4 className="font-weight-bold mb-3">{items.fullName}</h4>
                                   <span className="text-dark font-weight-bold ">{items.category}</span><br></br>
                                   <span className="text-dark font-weight-bold ">{items.averageRating!=null?items.averageRating:"NA"}&nbsp;&nbsp;<i class="fas text-warning fa-star"></i></span><br></br>
                                   <Link to={`preview-profile/${items.user}`} ><Button className="mt-3" >View Profile</Button></Link>
                                  
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
    providers:state.profile.providers
  
  });
  export default connect(mapStateToProps,{FetchProviders})( Plumber);
  
