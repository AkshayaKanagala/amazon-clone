import React from "react";

function Footer() {
  return (
    <>
      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      <footer className="footer">
        <div className="footer-grid">
          <div><h3>Get to Know Us</h3><a href="#about">About Us</a><a href="#careers">Careers</a><a href="#press">Press Releases</a></div>
          <div><h3>Connect with Us</h3><a href="#facebook">Facebook</a><a href="#twitter">Twitter</a><a href="#instagram">Instagram</a></div>
          <div><h3>Make Money with Us</h3><a href="#sell">Sell on Amazon</a><a href="#advertise">Advertise Your Products</a><a href="#affiliate">Become an Affiliate</a></div>
          <div><h3>Let Us Help You</h3><a href="#account">Your Account</a><a href="#returns">Returns Centre</a><a href="#help">Help</a></div>
        </div>
        <div className="footer-bottom"><strong>amazon.in</strong><p>Demo React project for educational purposes.</p></div>
      </footer>
    </>
  );
}
export default Footer;
