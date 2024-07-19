import React from 'react'
import { Link } from 'react-router-dom';
import { If, Then, Else } from 'react-if-elseif-else-render';
import { ProductListing, Testimonial, Partners, Faqs } from '../components';
import { hero, forSeller,forBuyer, forSocial,forSocialProducts,forSocialServices,forSocialDigital } from "../utils/homeconstants";

const Home = () => {
    
  return (
    <>
    <section className="hero fix">
    <div className="container">
        <div className="layer">
        {hero.map((hero) => (
            <div className="text-content" responsive="" key={hero.id}>
                <h1>
                {hero.title}
                    <span id="typed-text">{hero.typed}</span><span className="typed-cursor" aria-hidden="true">|</span>
                </h1>
                <p>
                {hero.desc} – <br className="d-none d-lg-inline"/>{hero.desc2}
                </p>
                <Link className="animate__animated btn bg-darken" href={hero.bgdarkenUrl}>
                {hero.bgdarkenText}
                </Link>
                <Link className="animate__animated bg-none" href={hero.bgnoneUrl} data-toggle="modal" data-target="#videoModal">
                {hero.bgnoneText} <i className="fas fa-arrow-right"></i>
                </Link>
                <div className="img-content">
                    <img src={hero.imgContent} alt={hero.title}/>
                </div>
                <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <video id="video" className="embed-responsive-item" controls="controls">
                                        <source src={hero.videoContent} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>
<section className="for-seller">
    <div className="container">
        <div className="row">
        {forSeller.map((forSeller) => (
          <If condition={forSeller.id === 1}>
            <Then>
            <div className="offset-md-1 col-md-10 text-center" key={forSeller.id}>
                <h1 data-aos="fade-down" className="text-center aos-init aos-animate">
                    {forSeller.title}
                </h1>
                <p data-aos="fade-down" className="text-center c-white aos-init aos-animate">
                   {forSeller.desc}
                </p>
                <a data-aos="fade-down" href={forSeller.sellerUrl} className="aos-init aos-animate">
                    {forSeller.sellerText} 
                </a>

            </div>
            </Then>
            </If>
            ))}
        </div>
        <div className="row">
            <div className="col-md-4">
                <ul data-aos="fade-left" className="aos-init aos-animate">
                {forSeller.map((forSeller) => (
                     <If condition={forSeller.id === 2}>
                        <Then>
                            <li key={forSeller.id}><i className="fas fa-check-circle"></i> {forSeller.title}</li>
                        </Then>
                    </If>
                ))}
                </ul>
            </div>
            <div className="offset-md-4 col-md-4">
                <ul data-aos="fade-right" className="aos-init aos-animate">
                {forSeller.map((forSeller) => (
                     <If condition={forSeller.id === 3}>
                        <Then>
                            <li key={forSeller.id}><i className="fas fa-check-circle"></i> {forSeller.title}</li>
                        </Then>
                    </If>
                ))}
                </ul>
            </div>
        </div>
        {forSeller.map((forSeller) => (
            <If condition={forSeller.id === 4}>
                <Then>
                     <img data-aos="fade-up" src={forSeller.imgContent} alt={forSeller.title} className="aos-init aos-animate" key={forSeller.id}/>
                </Then>
            </If>
        ))}
    </div>
</section>
<section className="for-buyer">
    <div className="container">
        <div className="row">
        {forBuyer.map((forBuyer) => (
            <If condition={forBuyer.id === 1}>
                <Then>
                    <div className="offset-md-1 col-md-10 text-center">
                        <h1 data-aos="fade-down" className="text-center aos-init aos-animate">
                        {forBuyer.title}
                        </h1>
                        <p data-aos="fade-down" className="text-center c-white aos-init aos-animate">
                            {forBuyer.desc}
                            </p>
                    </div>
                </Then>
            </If>
        ))}
        </div>
        <div className="row">
            <div className=" col-md-12">
                <div className="row">
                    {forBuyer.map((forBuyer) => (
                        <If condition={forBuyer.id === 1}>
                            <Then></Then>
                            <Else>
                                <div className={forBuyer.id === 2 ? "col-4 col-md-2 offset-md-1 col-sm-4 aos-init aos-animate" : "col-4 col-md-2 col-sm-4 aos-init aos-animate"} data-aos="fade-up" data-aos-delay="0">
                                    <div className="feature-item">
                                        <img src={forBuyer.featureImg} alt={forBuyer.title} style={{ width: forBuyer.id === 2 ? '100%' : '80%', height: 'auto', position: 'relative' }}/>
                                        <h3>{forBuyer.title}</h3>
                                    </div>
                                </div>
                            </Else>
                        </If>
                     ))}
                </div>
            </div>
        </div>
    </div>
</section>
<section className="for-social">
    <div className="container">
        <div className="row">
        {forSocial.map((forSocial) => (
            <If condition={forSocial.id === 1}>
                <Then>
                    <div className="offset-md-1 col-md-10 text-center">
                        <h1 data-aos="fade-down" className="text-center aos-init aos-animate">
                        {forSocial.title}
                        </h1>
                        <p data-aos="fade-down" className="text-center c-white aos-init aos-animate">
                        {forSocial.desc}
                        </p>
                    </div>
                </Then>
            </If>
             ))}
        </div>
        <div className="row">
            <div className="col-md-4">
                <h4 data-aos="fade-down" className="text-center aos-init aos-animate">
                {forSocialProducts.map((forSocialProducts) => (
                        <If condition={forSocialProducts.id === 12}>
                            <Then>
                                 {forSocialProducts.title}
                            </Then>
                        </If>
                    ))}
                </h4>
                <ul data-aos="fade-left" className="aos-init aos-animate">
                {forSocialProducts.map((forSocialProducts) => (
                    <li key={forSocialProducts.id}  style={{ color: forSocialProducts.id === 6 ? '#8e928e' : '' }}><i className={ forSocialProducts.id === 6 ? "" : "fas fa-check-circle"}></i> {forSocialProducts.title}</li>
                ))}
                </ul>
            </div>
            <div className="col-md-4">
                <h4 data-aos="fade-down" className="text-center aos-init aos-animate">
                {forSocialServices.map((forSocialServices) => (
                        <If condition={forSocialServices.id === 12}>
                            <Then>
                                 {forSocialServices.title}
                            </Then>
                        </If>
                    ))}
                </h4>
                <ul data-aos="fade-right" className="aos-init aos-animate">
                    {forSocialServices.map((forSocialServices) => (
                        <li key={forSocialServices.id}  style={{ color: forSocialServices.id === 6 ? '#8e928e' : '' }}><i className={ forSocialServices.id === 6 ? "" : "fas fa-check-circle"}></i> {forSocialServices.title}</li>
                    ))}
                </ul>
            </div>
            <div className="col-md-4">
                <h4 data-aos="fade-down" className="text-center aos-init aos-animate">
                    {forSocialDigital.map((forSocialDigital) => (
                        <If condition={forSocialDigital.id === 12}>
                            <Then>
                                 {forSocialDigital.title}
                            </Then>
                        </If>
                    ))}
                </h4>
                <ul data-aos="fade-right" className="aos-init aos-animate">
                    {forSocialDigital.map((forSocialDigital) => (
                        <If condition={forSocialDigital.id === 12}>
                            <Then>
                            </Then>
                            <Else>
                            <li key={forSocialDigital.id}  style={{ color: forSocialDigital.id === 6 ? '#8e928e' : '' }}><i className={ forSocialDigital.id === 6 ? "" : "fas fa-check-circle"}></i> {forSocialDigital.title}</li>
                            </Else>
                        </If>
                    ))}
                </ul>
            </div>
        </div>

    </div>
</section>
<ProductListing/>
<Testimonial/>
<Partners/>
<Faqs/>

</>
  )
}

export default Home