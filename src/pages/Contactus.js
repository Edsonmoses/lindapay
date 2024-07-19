import React from 'react'

const Contactus = () => {
  return (
    <>
    <section className="page-content">
    <div className="container">

        <div className="header-title mb-30 pt-50">
            <h1 className="page-header mb-0">
                Contact Us
            </h1>
            <span className="text-grey-600 fs-6 d-block">Use your prefered channel to reach us below</span>
        </div>

        <div className="row">
            <div className="col-md-6">
                <form method="post" className="contact-form">

                    <div className="validation-summary-valid" data-valmsg-summary="true"><ul><li style={{ display:'none'}}></li>
</ul></div>


                    <div className="form-group">
                        <label>Your Name</label>
                        <input className="form-control" type="text" data-val="true" data-val-required="The Name field is required." id="Input_Name" name="Input.Name"/>
                    </div>

                    <div className="form-group">
                        <label>Your Email</label>
                        <input className="form-control" type="email" data-val="true" data-val-email="The Email field is not a valid e-mail address." data-val-required="The Email field is required." id="Input_Email" name="Input.Email"/>
                    </div>

                    <div className="form-group">
                        <label>Your Phone</label>
                        <input className="form-control" type="text" id="Input_Phone" name="Input.Phone"/>
                    </div>

                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea className="form-control" rows="5" data-val="true" data-val-required="The Message field is required." id="Input_Body" name="Input.Body"></textarea>
                    </div>

                    <div className="form-group mt-30">
                        <button type="submit" className="btn btn-lg mt-10">Send Enquiry</button>
                    </div>
                  </form>
            </div>

            <div className="col-12 col-md-5 offset-md-1">
                <div className="bg-grey h-full bg-white p-5 br-1">
                    <h4 className="text-grey-600">We are happy to hear from you</h4>
                    <p>Give us a call or stop by our door anytime, we try to answer all enquiries within 24 hours on business days.</p>

                    <hr className="w-80"/>
                    <p className="lead">Nextgen<br/>Mall <br/>Mombasa Road</p>
                    <div>
                        <span className="d-inline-block w-20 text-lighter" title="Email">E:</span>
                        <span className="fs-14">
                            <script language="JavaScript">
                                var username = "info";
                                var hostname = "lindapay.co.ke";
                                var linktext = username + "@" + hostname;
                                document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
                            </script><a href="mailto:lindapay.co.ke">info@lindapay.co.ke</a>
                        </span>
                    </div>
                    <div>
                        <span className="d-inline-block w-20 text-lighter" title="Phone">P:</span>
                        <span className="fs-14">+254 743 977171</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Contactus