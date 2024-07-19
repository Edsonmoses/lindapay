import React from 'react'
import { Faqs, Partners } from '../components'

const Pricing = () => {
  return (
    <>
    <section className="fee-calculator pt-60">
    <div className="container row">
        <div className="col-md-6">
            <h1>Fee Calculator</h1>
            <p>Enter your goods purchase price to calculate your escrow fee.</p>
            <div className="input-group">
                <select id="userType">
                    <option value="buyer" selected="selected">I am Buying</option>
                    <option value="seller">I am Selling</option>
                </select>
                <select id="productType">
                    <option value="digital" selected="selected">Digital Product</option>
                    <option value="services">Services</option>
                    <option value="physical">a Physical Product</option>
                </select>
            </div>

            <div className="input-group">
                <input type="number" id="transactionAmount" step="0.01" oninput="calculateFee()" placeholder="What's the total price?"/>
                <select id="currency">
                    <option value="KSH" selected="selected">KSH</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <p><span id="feeDisplay">0.00</span> KSH (Standard Fee)</p>
            <a className="explore-btn" href="/create">Get Started Now</a>
        </div>
    </div>
</section>

<section className="our-fee">
    <div className="container">
        <div className="row escrow-info">
            <div className="col-md-3">
                <h4>"Safeguarding Transactions with Clear and Affordable Fees"</h4>
            </div>
            <div className="col-md-8 offset-md-1 fee-item">
                <h3>Fee Breakdown</h3>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            For every transaction, a fee of 2% + KSH 100 is
 charged to cover the processing, escrow, and disbursement services.
                            This fee can be paid entirely by one party 
or split between the buyer and seller at varying percentages, allowing 
for flexibility and fairness.
                            There are no hidden charges and transaction 
fee is one of the lowest in the industry.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-4 fee-item">
                <h3>Payment options for buyers</h3>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="custom-list">
                            <li data-aos="fade-up" data-aos-delay="0" className="aos-init aos-animate">Bank Transfer</li>
                            <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">Credit &amp; Debit Card</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">PayPal</li>
                        </ul>
                        <p>
                            If you've agreed to pay all or some of the 
fee, it's automatically added to the purchase price of the item you are 
buying.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-4 fee-item">
                <h3>Disbursement options for sellers and brokers</h3>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            Upon initiating a transaction, sellers and 
brokers have the freedom to specify their preferred disbursement method.
                            Once all transaction terms are met and 
verified, PayScrow.net will credit the seller's wallet.
                            From there, the seller can easily request a 
withdrawal for their funds.
                            The processing time for withdrawals is the 
same or the next business day, in line with their chosen disbursement 
method.
                        </p>
                        <p>
                            For transactions involving shared escrow 
fees, the agreed-upon amount will be deducted transparently from either 
the purchase price or the broker's commission, ensuring fairness and 
accountability throughout the process.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-4 fee-item">
                <a className="explore-btn" href="/create">Get Started Now</a>

            </div>
        </div>

    </div>
</section>

<section className="for-social">
    <div className="container">
        <div className="row">
            <div className="offset-md-1 col-md-10 text-center">
                <h1 data-aos="fade-down" className="text-center c-white aos-init aos-animate">
                    Say goodbye to worries and uncertainties by never buying or selling online without PayScrow.net
                </h1>
                <a className="explore-btn" href="/roducts">Get Started</a>
            </div>
        </div>

    </div>
</section>
<Faqs/>
<Partners/>
    </>
  )
}

export default Pricing