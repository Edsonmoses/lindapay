import React from 'react'
import {  Partners, Faqs, Banner } from '../components';

const About = () => {
  return (
    <>
      <Banner title="About LindaPay" 
       h2="Your Trusted Partner for" 
       sh2="Secure Escrow Transactions"
       h2s="Your Trusted" 
       sh2s="Escrow Partner"
       ltext="LindaPay is your number 1 digital escrow service, 
              providing a simple, transperent, secured payment method for your 
              transactions."
      />

      <section className="product-listings">
    <div className="container">
        <div className="row product-item">
            <div className="col-12 product-image">
                <img src="assets/img/whypayscrow.png" alt="About LindaPay No 1 Escrow Kenya Africa"/>
            </div>
        </div>
    </div>
</section>
<section className="our-story">
    <div className="container">
        <div className="row escrow-info">
            <div className="col-md-4">
                <h3>Do business with anyone, anywhere, even if you don't know or trust them</h3>
            </div>
            <div className="col-md-7 offset-md-1">
                <h4>Eliminate...</h4>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="custom-list">
                            <li data-aos="fade-up" data-aos-delay="0" className="aos-init aos-animate">Worries about buying things online</li>
                            <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Fear of online scams and fraud</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">Not being sure if sellers are real</li>
                            <li data-aos="fade-up" data-aos-delay="600" className="aos-init aos-animate">Anxieties about false advertising</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="custom-list">
                            <li data-aos="fade-up" data-aos-delay="0" className="aos-init aos-animate">Uncertainty in project payments</li>
                            <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Surprise fees or extra charges</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">Hesitation to pay upfront</li>
                            <li data-aos="fade-up" data-aos-delay="600" className="aos-init aos-animate">Fears of getting poor products</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="compliance" className="compliance-section">
    <div className="container">
        <div className="row">
            <div className="col-md-6 image aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/aboutpayscrow.png" alt="Compliance" className="img-fluid"/>
            </div>
            <div className="col-md-6 progress-bars aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <div className="progress-bar-container">
                    <h3>Compliance is our top priority</h3>
                    <p>Our compliance with international standards ensures the safety of your transactions.</p>
                    <div className="progress-bar-item">
                        <span className="progress-title">Security</span>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width:'98%' }}>99.9%</div>
                        </div>
                    </div>
                    <div className="progress-bar-item">
                        <span className="progress-title">Efficiency</span>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '96%' }}>98%</div>
                        </div>
                    </div>
                    <div className="progress-bar-item">
                        <span className="progress-title">Reliability</span>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '97%' }}>97%</div>
                        </div>
                    </div>
                    <div className="progress-bar-item">
                        <span className="progress-title">Insurance</span>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '99%' }}>96%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="how-it-started">
    <div className="container aos-init aos-animate" data-aos="fade-up">
        <h2 className="offset-md-1">How we got here</h2>
        <div className="row">
            <div className="col-md-5 offset-md-1">
                <p>
                    Our story began with a mission: to reshape the world
 of transactions into a secure and transparent ecosystem that empowers 
both buyers and sellers.
                </p>
                <p>
                    We recognized the challenges people faced in the 
digital commerce landscape – the fears of fraudulent transactions, the 
uncertainties of dealing with unknown parties, and the anxieties 
surrounding payment security.
                    This recognition set us on a journey to bridge these
 gaps and bring a new level of trust to digital interactions.
                </p>

            </div>
            <div className="col-md-5">
                <p>
                    With LindaPay, transactions become collaborative 
endeavors between buyers and sellers, underpinned by our role as a 
trusted intermediary.
                    Funds are safeguarded until both parties agree that 
the terms have been fulfilled.
                </p>
                <p>
                    Our vision doesn't stop at individual transactions. 
We aspire to create a future where trust is the cornerstone of buying 
and selling.
                    Our milestone-based payments facilitate seamless 
project progress, and our multi-party transaction services simplify 
intricate deals.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="for-social">
    <div className="container">
        <div className="row">
            <div className="offset-md-1 col-md-10 text-center">
                <h1 data-aos="fade-down" className="text-center c-white aos-init aos-animate">
                    Say goodbye to worries and uncertainties by always 
buying or selling with LindaPay digital escrow platform
                </h1>
                <a className="explore-btn" href="#/products">Get Started</a>
            </div>
        </div>

    </div>
</section>
<Faqs/>
<Partners/>
    </>
  )
}

export default About