import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import img from "../pages/1.jpg";
import img2 from "../pages/2.jpg";
import img3 from "../pages/3.jpg";
import img4 from "../pages/4.jpg";
import img5 from "../pages/IMG-20241214-WA0034.jpg";
import img6 from "../pages/IMG-20241214-WA0038.jpg";
import img7 from "../pages/IMG-20241214-WA0039.jpg";
import img8 from "../pages/IMG-20241214-WA0037.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-brand">
          <img src="logo.png" alt="Naushad Rawat Band" className="footer-logo" /> {/* Replace with your logo */}
          <p>
            Ours is one of the prominent organizations engaged in serving our clients with an exclusive collection of Wedding Baggis...<a href="#read-more">Read More</a>
          </p>
          <p>
            <a href="tel:9811162044">9811162044</a>
          </p>
 


        </div>
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="#our-quality">Our Quality</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#video-gallery">Video Gallery</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#terms">Term & Condition</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-photo-stream">
          <h4>Photo Stream</h4>
          <div className="photo-grid">
            <img src={img} alt="Photo 1" />
            <img src={img2} alt="Photo 2" />
            <img src={img3} alt="Photo 3" />
            <img src={img4} alt="Photo 4" />
            <img src={img5} alt="Photo 5" />
            <img src={img6} alt="Photo 6" />
            <img src={img7} alt="Photo 7" />
            <img src={img8} alt="Photo 8" />
          </div>
        </div>
        <div className="footer-facebook">
          <h4>Facebook</h4>
          <div className="facebook-feed">
            {/* <iframe 
              src="https://www.facebook.com/profile.php?id=61554728860875&mibextid=ZbWKwL"
              width="340" 
              height="500" 
              style={{border:'none', overflow:'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 - Naushad Rawat Band| Powered by : Designed and developed by ALINS GROUP</p>
      </div>
    </footer>
  );
};

export default Footer;
