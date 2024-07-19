import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="container">
        <div className="row links">
            <div className="col-md-4">
                <img src="assets/img/logo_001.png" alt='lindaPay' className="logo-img"/>
                <p>
                    We are an independent escrow service provider 
working with CBN licensed Deposit Money Banks and payment processors to 
ensure both buyers and sellers are happy with their transactions.
                </p>

                <div style={{fontSize: '12px' }}>LindaPay is a Service of Ewossy Services Ltd. RC 1310657</div>

                <Link to="/">© 2024 LindaPay</Link>
            </div>
            <div className="col-md-4">
                <h6>USEFUL LINKS</h6>
                <ul>
                    <li><a href="/about">Why LindaPay</a></li>
                    <li><a href="/products">Buyer to Seller</a></li>
                    <li><a href="/products">Broker a Deal</a></li>
                    <li><a href="/privacy">Policies</a></li>
                    <li>
                            <a href="/login">
                                Login
                            </a>
                    </li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/products">Get Started</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h6>CONTACT US</h6>
                <p>
                    Enquiries? Suggestions? We love to hear from you
                </p>
                <a className="btn border" href="/contactus">
                    Contact
                </a>
                <a className="btn dark" href="/products">
                    Get Started
                </a>
                <ul>
                    <li><a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    
</footer>
    <div style={{display: 'none'}}>
    <div id="custom-loader" class="loader-primary">
        <div class="loader-demo">
            <div class="loader-inner ball-scale-ripple-multiple mb">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="text-center mt"><span class="loading-text">Please wait...</span></div>
        </div>
    </div>
</div>
</>
  )
}

export default Footer