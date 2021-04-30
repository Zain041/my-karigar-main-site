import React, { Component } from 'react'
import{  Container, Row ,Col,Card,Input,Button,Form,CardHeader }from 'reactstrap'
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";




export default class About extends Component {
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
           <Container className="bg-white shadow mb-5 rounded " style={{marginTop:'-30px',position:'relative' ,zIndex:'100'}}>
                        <h1 className="text-secondary text-center font-weight-bold mb-4 mt-2">About Us </h1>
                        <div className="justify-text-center font-weight-normal">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, making 
                        it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                         College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                         from a Lorem Ipsum passage, and going through the cites of the word in classical
                          literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                          by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                          from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s 
is reproduced below for those interested. Sections 1.10.32 
and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
       
</div>
        </Container>
                
            </>
        )
    }
}
