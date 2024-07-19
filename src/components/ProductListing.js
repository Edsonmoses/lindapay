import React from 'react'
import { Link } from 'react-router-dom';
import { If, Then, Else } from 'react-if-elseif-else-render';
import {productconten } from "../utils/productlisting";

const ProductListing = () => {
  return (
    <section className="product-listing">
    <div className="container mt-10">
    {productconten.map((productconten) => (
        <If condition={productconten.id === 1}>
            <Then>
                <div className="row product-item aos-init aos-animate" data-aos="fade-up" key={productconten.id}>
                    <div className="col-md-6 product-image">
                        <img src={productconten.productImage} alt={productconten.title}/>
                    </div>
                    <div className="col-md-6 product-content">
                        <h3>{productconten.title}</h3>
                        <p>
                           {productconten.desc}
                        </p>
                        <div className="btn-container">
                            <Link className="btn product-btn" href={productconten.productUrl}>{productconten.productText}</Link>
                        </div>
                    </div>
                </div>
            </Then>
            <Else>
                <div className="row product-item aos-init aos-animate" data-aos="fade-up"  key={productconten.id}>
                    <div className="col-md-6 product-content align-start order-last order-md-0">
                        <h3>{productconten.title}</h3>
                        <p>
                            {productconten.desc}
                        </p>
                        <div className="btn-container">
                            <Link className="btn product-btn" href={productconten.productUrl}>{productconten.productText}</Link>
                        </div>
                    </div>
                    <div className="col-md-6 product-image order-first order-md-1">
                        <img src={productconten.productImage} alt={productconten.title}/>
                    </div>
                </div>
            </Else>
        </If>
        ))}
    </div>
</section>
  )
}

export default ProductListing