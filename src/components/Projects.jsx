import React, { useEffect } from 'react'
import Project from './Project'
import './Projects.css'
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import amazon from '../assets/amazon.png'
import goals from '../assets/goals.png'
import cloudwaves from '../assets/cloudwaves.png'
import embibe from '../assets/embibe.png'
import music from '../assets/music.png'



const squareVariants = {
  visible: { opacity: 1, y: 0, transition: {delay:0.2, duration: 1 } },
  hidden: { opacity: 0, y: "-100%"}
};
const squareVariantsNew = {
  visible: { scale: 1.1, transition: {delay:1.1, duration: 1 } },
  hidden: { scale: 0}
};

const Projects = () => {
     const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView)
        controls.start("hidden")
    
    }, [controls, inView]);
  return (
    <div className="projects__container" id='projects'>
        <motion.h1
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        >
          My Recent Projects
        </motion.h1>
        <motion.hr ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariantsNew}
        />
        <div className='projects__work'>
            <Project image={music}  title="Music Genre Predictor Using Lyrics" description="It is an Machine Learning based project which used Scikit-Learn and python FastAPI to create a model which can predict the genre of a music using lyrics with an accuracy of 77.8%" tags={["Python", "FastAPI", "Scikit-Lean", "Matplotlib", "Numpy"]} link="https://github.com/ItzAmrit2002/Music-Genre-Predictor"/>
            <Project image={embibe}  title="TestHub" description="It is an exam conducting website built using MERN stack with with advanced stats and timer features. Also comes with an Admin panel for examiners to upload and manipulate papers" tags={["ReactJs", "NodeJS", "MongoDb", "ExpressJs", "JWT"]} link="https://github.com/ItzAmrit2002/Embibe"/>
            <Project image={amazon}  title="Amazon Clone" description="It is clone of the Amazon India Website build Using React Js with properly functioning Login, Resgister and Cart functionalities. It contains the implementation of Firebase Authentication and React Context API." tags={["ReactJs", "Context API", "Firebase Auth"]} link="https://github.com/ItzAmrit2002/Amazon-Clone"/>
            <Project image={cloudwaves}  title="Cloud Waves" description="It is an E-commerce platform built using NextJs. It has fully funtioning Cart application with the implementation of Sanity.io.Also there is use of React Context API." tags={["NextJs", "Context API", "Sanity.io"]} link="https://github.com/ItzAmrit2002/Cloud-Waves-E-commerce-platform"/>
            {/* <Project image={goals}  title="My Goal Setter" description="It is a full stack Goal Setter App with use of CRUD functionalities using ReactJs, NodeJs, Express and MongoDB." tags={["ReactJs", "React Redux", "NodeJs", "MongoDB"]} link="https://github.com/ItzAmrit2002/MyGoals-Goal-Setter"/> */}
            
        </div>
    </div>
  )
}

export default Projects
