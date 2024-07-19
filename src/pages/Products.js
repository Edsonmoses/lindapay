import React from 'react'
import { Banner, Partners, ProductListing } from '../components'

const Products = () => {
  return (
    <>
 <Banner 
 title="Our Products" 
 h2="Secured and Transparent" 
 sh2="Digital Escrow Platform"
 h2s="Your Trusted" 
 sh2s="Escrow Partner"
 ltext="We serve as a trusted third party to guarantee that transaction terms are upheld.
        With PayScrow, you can have complete confidence that everyone involved gets what they expect."
 />
<ProductListing/>
<Partners/>
    </>
  )
}

export default Products
