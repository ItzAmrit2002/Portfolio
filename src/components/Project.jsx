import React, { useEffect } from 'react'
import './Project.css'
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const squareVariants = {
  visible: { opacity: 1, x: 0, transition: {delay:0.5, duration: 1 } },
  hidden: { opacity: 0, x: "-100%"}
};
const newVariants = {
  visible: {opacity: 1, scale: 1},
  hidden: {opacity: 0, scale: 0}
};


const Project = ({image, title, description, tags, link}) => {
  const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    
    }, [controls, inView]);
  return (
    <div className="project__container">
        <motion.div className="left__" 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={newVariants}
        transition={{delay : 0.2, duration : 1}}
        >
        <motion.figure class="imghvr-flip-horiz" id='figure'
        whileHover={{
          scale: 1.1,
          boxShadow: "10px 10px 0 #2d2e32",
          transition: { duration: 0.6 },
        }}
        >
          <img className='hover__image' src={image}/>
          <figcaption>
            <div className="links">
                <h3>View Source Code</h3>
                <p>Github</p>
            </div>
              
          </figcaption>
          <a href={link} target="_blank"></a>
        </motion.figure>
        </motion.div>
        <motion.div className="right__"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="tags">
            {tags.map(tag => (
              <span>{tag}</span>
            ))}
            {/* <span>ReactJs</span>
            <span>Firebase</span>
            <span>Context API</span> */}
          </div>
          
        </motion.div>
    </div>
  )
}

export default Project