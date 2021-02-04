import React, { Component } from 'react'
import './footer.css';

 class Footer extends Component {
    render() {
        return (
            <>
                  <footer id="footer">



<div class=" bg-light footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 text-center  footer-contact">
        <h3>My Karigar</h3>
       <p >
          <strong>Phone:</strong>+923066201966<br/>
          <strong>Email:</strong> info@mykarigar.com<br/>
        </p>
      </div>

      <div class="col-lg-3 col-md-6 d-flex justify-content-center footer-links">
    
        
        <ul>
        <li><h4 >About Us</h4></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li> <a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-3 d-flex justify-content-center col-md-6 footer-links">
      
        <ul>
        <li><h4 >Our Services</h4></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Advertise With Us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Post Your Requirement</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Complaint</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Feedback</a></li>
          
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 text-center footer-links">
        <h4>Our Social Networks</h4>
        
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fa fa-facebook-square"></i></a>
          <a href="#" class="instagram"><i className="fa fa-instagram" /></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>
<div className="credits text-center font-weight-bold ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, My Karigar{" "}
              <i className="fa fa-heart heart" /> 
            </span>
          </div>


</footer>
            </>
        )
    }
}

export default Footer;