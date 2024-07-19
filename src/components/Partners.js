import React from 'react'
import { partners } from "../utils/partners";

const Partners = () => {
  return (
    <section className="partners">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="row partners">
                   {partners.map((partners) => (
                        <li data-aos="fade-up" data-aos-delay={partners.delay} className="col-3 aos-init aos-animate">
                            <a href={partners.partUrl} >
                                <img className="p1" src={partners.partImage} alt={partners.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Partners