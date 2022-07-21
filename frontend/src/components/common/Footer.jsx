import React from "react";
import DropDown from "../../assets/img/dropdown.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="left-footer">
            <div className="quick-links">
              <h1>Quick Links</h1>
              <a href="/">Home</a>
              <a href="#">Things To Do</a>
              <a href="#attractions">Tourist Attractions</a>
              <a href="/favourites">Favorites</a>
            </div>
            <div className="address">
              <h1>Address</h1>
              <p>14, 1 Ellis bridge ST,</p>
              <p>auckland 3500,USA</p>
              <p>+15 9900 990 009</p>
              <p>contactus@travel.com</p>
            </div>
          </div>
          <div className="right-footer">
            <p>Subscribe to our newsletter</p>
            <div className="email">
              <input type="email" placeholder="Your email" />
              <img src={DropDown} alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>TRAVEL BUG © All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
