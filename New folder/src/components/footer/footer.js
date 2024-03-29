import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <>
                  <footer id="footer">

<div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Subscribe here to get latest updates from My Karigar</p>
        <form action="" method="post">
          <input type="email" name="email"/>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>My Karigar</h3>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022<br/>
          United States <br/><br/>
          <strong>Phone:</strong>+923066201966<br/>
          <strong>Email:</strong> info@mykarigar.com<br/>
        </p>
      </div>

      <div class="col-lg-3 col-md-6 d-flex justify-content-center footer-links">
    
        
        <ul>
        <li><h4 >About Us</h4></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
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

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container footer-bottom clearfix">
  <div class="copyright">
    &copy; Copyright <strong><span>Mykarigar</span></strong>. All Rights Reserved
  </div>
  
</div>
</footer>
            </>
        )
    }
}

export default Footer;