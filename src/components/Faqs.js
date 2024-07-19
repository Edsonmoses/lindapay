import React from 'react'
import { If, Then, Else } from 'react-if-elseif-else-render';
import { general } from "../utils/fags";

const Faqs = () => {
   
  return (
    <section className="faq-section">
    <div className="faq-section container">
        <h1 data-aos="fade-down" className="text-start aos-init aos-animate">
            FAQ
        </h1>
        <div className="row faq-row">
        {general.map((general) => (
            <If condition={general.id === 0}>
                <Then>
                    <div className="col-md-4 faq-headings aos-init aos-animate" data-aos="fade-left">
                        <span>{general.title}</span>
                        <p>
                            {general.subtitle}
                        </p>
                    </div>
                </Then>
            </If>
         ))}
           
            <div className="col-md-8 faq-content aos-init aos-animate" data-aos="fade-right">
                <div className="faq-category">
                {general.map((general) => (
                   <If condition={general.id === 0}>
                        <Then></Then>
                        <Else>
                        <div className="faq-item" key={general.id}>
                            <div className="question" data-toggle="collapse" data-target={`#answer${general.id}`}>
                                {general.question}
                                <i className="icon-arrow"></i>
                            </div>
                            <div className="answer collapse" id={`#answer${general.id}`}>
                                {general.answer}
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
  )
}

export default Faqs