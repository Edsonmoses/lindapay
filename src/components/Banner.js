import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (prop) => {
  return (
    <section className="banner-secondary">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="btn-container">
                    <Link to="#" className="btn product-btn-small">{prop.title}</Link>
                </div>
            </div>
            <div className="col-md-7 d-none d-lg-inline">
                <h2 style={{ color: '#0c2442'}}>{prop.h2}</h2>
                <h2>{prop.sh2}</h2>
            </div>
            <div className="col-md-7 d-block d-lg-none">
                <h2 style={{ color: '#0c2442'}}>{prop.h2s}</h2>
                <h2>{prop.sh2s}</h2>
            </div>
            <div className="col-md-5">
                <p>
                   {prop.ltext}
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner