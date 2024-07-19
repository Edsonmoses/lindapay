import React from 'react'
import { If, Then, Else } from 'react-if-elseif-else-render';
import { productconten} from "../utils/testimonials";

const Testimonial = () => {
  return (
<section className="testimonial">
    <div className="container">
        <div className="row">
            <div className="offset-md-1 col-md-10 text-center">
            {productconten.map((productconten) => (
                    <If condition={productconten.id === 0}>
                         <Then>
                          <h1 data-aos="fade-down" className="text-center aos-init aos-animate">
                                {productconten.title}
                            </h1>
                         </Then>
                    </If>
                ))}
                <p data-aos="fade-down" className="text-center heading aos-init aos-animate"></p>
                <div className="lSSlideOuter">
                    <div className="lSSlideWrapper usingCss">
                        <ul className="content-slider lightSlider lsGrab aos-init lSSlide aos-animate" data-aos="fade-down" style={{ width: '2760px', height: '228px', paddingBottom: '0%', transform: 'translate3d(0px, 0px, 0px)'}}>
                        {productconten.map((productconten) => (
                            <If condition={productconten.id === 0}>
                                <Then></Then>
                                <Else>
                                    <li className="lslide active" style={{ width: '920px', marginRight: '0px'}} key={productconten.id}>
                                        <img src={productconten.testimonialImage} alt={productconten.testimonialName}/>
                                        <p>{productconten.desc}</p>
                                        <div className="testimonial-name">
                                        {productconten.testimonialName}<span className="identity">{productconten.identity}</span>
                                        </div>
                                    </li>
                                </Else>
                            </If>
                     ))}
                </ul>
               </div>
            </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default Testimonial