import React from "react";

function Footer() {
  return (
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="footer-wrapper">
                <div className="col-md-3 col-sm-3">
                  <a href="true"><img src="images/logo-black.png" alt="" className="footer-logo" /></a>
                </div>
                <div className="col-md-2 col-sm-2">
                </div>
                <div className="col-md-2 col-sm-2">
                  <h6></h6>
                  <ul className="footer-links">
                    {/* <li><a href="true">Sign Up</a></li>
                    <li><a href="true">Login</a></li>
                    <li><a href="true">Advertise</a></li> */}
                  </ul>
                </div>
                <div className="col-md-2 col-sm-2">
                  <h6></h6>
                  <ul className="footer-links">
                    {/* <li><a href="true">Sign Up</a></li>
                    <li><a href="true">Login</a></li>
                    <li><a href="true">Explore</a></li> */}
                  </ul>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Contact</h6>
                  <ul className="contact">
                    <li><i className="icon ion-ios-telephone-outline" />+1(312)523-5555</li>
                    <li><i className="icon ion-ios-email-outline" />info@buzzkillrz.com</li>
                    <li><i className="icon ion-ios-location-outline" />Northwestern University</li>
                  </ul>
                  <ul className="list-inline social-icons">
                    {/* <li><a href="#"><i className="icon ion-social-facebook" /></a></li> */}
                    {/* <li><a href="#"><i className="icon ion-social-twitter" /></a></li> */}
                    {/* <li><a href="#"><i className="icon ion-social-googleplus" /></a></li> */}
                    {/* <li><a href="#"><i className="icon ion-social-pinterest" /></a></li> */}
                    {/* <li><a href="#"><i className="icon ion-social-linkedin" /></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }

  export default Footer;