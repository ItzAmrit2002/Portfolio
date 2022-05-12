import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import { useAnimation, motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from "react-intersection-observer";


const newVariants1 = {
    visible: {opacity: 1, scale: 0.9},
    hidden: {opacity: 0, scale: 0}
  };
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_qxh04ql', 'template_f97c34p', form.current, 'jqSiV4myKQ4f2zcgf')
    
      .then((result) => {
          console.log(result.text);
          toast.success('Your Message Has been sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }, (error) => {
          console.log(error.text);
          toast.error('Something Went Wrong!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      });

      e.target.reset();
  };
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
        <form ref={form} onSubmit={sendEmail}>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required name='from_name'/>
              <label>Name</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="email" required name='email'/>
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{float: 'right'}}>
              <input type="number" required name='number'/>
              <label>Phone Number</label> 
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} name='message'/>
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <button type='submit' className="btn-lrg submit-btn">Send Message</button>
          </div>
        </div>
        </form>
      </motion.div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </div>
)
}

export default Contact