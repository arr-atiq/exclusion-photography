import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer class="site-footer mt-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Photography is a window into their soul, and their photographs are a manifestation of that. How they craft the light is ultimately an expression of their mood, their upbringing, their values, their victories, and their losses. It’s happening to you when you press the shutter button whether you realize it or not. Even if you’re only creating photographs simply to make money or to gain validation on social media. Even if you’re only being hired to take family portraits, you’re being hired by clients who like the way you express yourself in your photos.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a href="#">Weeding Photography</a></li>
                            <li><a href="#">Travel Photography</a></li>
                            <li><a href="#">Portrait Photography</a></li>
                            <li><a href="#">Interior Photography</a></li>
                            <li><a href="#">Nature Photography</a></li>
                            <li><a href="#">Product Photography</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12 d-flex">
                            <ul class="social-icons d-flex ms-auto">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;