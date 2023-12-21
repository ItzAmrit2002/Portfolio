import React, { useEffect } from 'react'
import './About.css'
import Skill from './Skill'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import react from '../assets/react.json'
import node from '../assets/node.json'
import web3 from '../assets/web3.json'

const squareVariants = {
    visible: { opacity: 1, y: 0, transition: {delay:1.5, duration: 1 } },
    hidden: { opacity: 0, y: "-45%"}
  };
const newVariants = {
  visible: {opacity: 1, scale: 1},
  hidden: {opacity: 0, scale: 0}
};
const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      // if(!inView)
      // {
      //   controls.start("hidden");
      // }
    }, [controls, inView]);
  return (
    <div className='about' id='about'>
        <div className='about__container'>
            <div className="left">
                <motion.div className="left__container">
                  <motion.div className='anim'
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={newVariants}
                  transition={{delay : 0.2, duration : 1}}
                  >
                  <Skill slno={"01"} logo={react} title={"Frontend Development"} details={"HTML, CSS, Javascript, ReactJs, NextJs"}/>
                  </motion.div>
                  <motion.div className="anim"
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={newVariants}
                  transition={{delay : 0.6, duration : 1}}>
                  <Skill slno={"02"} logo={node} title={"Backend Development"} details={"NodeJs, Express, MongoDB, SQL, Firebase"}/>
                  </motion.div>
                  <motion.div className="anim"
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={newVariants}
                  transition={{delay : 1, duration : 1}}>
                  <Skill slno={"03"} logo={web3} title={"Blockchain Development"} details={"Solidity, web3Js, Ganache, Truffle"}/>
                  </motion.div>
                
                </motion.div>

            </div>
            <div className="right">
                <motion.div className="right__container"
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                >
                    <h1>
                        About Me
                    </h1>
                    <p>
                        I am a final year Computer Science student at Netaji Subhash Engineering College, Kolkata. Throughout my academic journey, I have gained extensive expertise in web development, specifically in the MERN stack. I have completed several projects in this field, showcasing my proficiency in various programming languages and frameworks such as C, C++, Java, Python, and Javascript. My passion lies in utilizing innovative technologies to solve real-world problems, and I am eager to find opportunities where I can apply my skills, expand my knowledge, and continue learning.
                    </p>
                    <a href="https://drive.google.com/file/d/1BbuuxBzGatOGmTb-kNAYh33jDoyVS_lK/view?usp=sharing" target="_blank"><button>Resume</button></a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
