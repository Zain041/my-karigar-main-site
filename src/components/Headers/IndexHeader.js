
/*eslint-disable*/
import React , {Component}from "react";

// reactstrap components
import { Container,Row,Col,FormGroup,Input } from "reactstrap";

// core components

 class IndexHeader extends Component {
  render(){

 
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/banner1.PNG") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Better Solutions For Your Problems</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className=" font-weight-bold presentation-subtitle text-center">
            Anyone Can find A Karigar in just one click!
            </h2>
          
          </Container>
         
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
         
        <h6 className="category category-absolute">
          
          <a
           
            target="_blank"
          >
            
          </a>
        </h6>
      </div>
      
    </>
  );
}
}

export default IndexHeader;
