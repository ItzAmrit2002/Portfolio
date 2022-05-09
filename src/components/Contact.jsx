import React, { useEffect } from 'react'
import './Contact.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const newVariants1 = {
    visible: {opacity: 1, scale: 0.9},
    hidden: {opacity: 0, scale: 0}
  };
const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView)
      {
        controls.start("hidden");
      }
    }, [controls, inView]);
  return (
    <div className="contact" id='contact'>
        <motion.div className="container"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={newVariants1}
        transition={{delay : 0.2, duration : 1}}
        >
        <div className="row">
          <h1>Contact Me</h1>
        </div>
        <div className="row">
          <h4 style={{textAlign: 'center'}}>I'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{float: 'right'}}>
              <input type="text" required />
              <label>Phone Number</label> 
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </motion.div>

    </div>
)
}

export default Contact