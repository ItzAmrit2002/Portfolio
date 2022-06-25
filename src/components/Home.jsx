import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Lottie from "react-lottie";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Link} from 'react-scroll'
import data2 from '../assets/data2.json'
import github2 from '../assets/github2.png'
import gmail2 from '../assets/gmail2.png'
import linkedin2 from '../assets/linkedin2.png'
import './Home.css'

const Home = () => {


    const [width, setWidth] = useState(420)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        animationData: data2,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

     useEffect(() => {
        if(window.innerWidth > 1400)
        {
            setWidth(650)
        }

        window.addEventListener("resize", () => {
        if(window.innerWidth < 1400)
        {
            setWidth(420)
        }
        if(window.innerWidth > 1400)
        {
            setWidth(650)
        }
          });
      }, []);
    return (
    <div className='home' id='home'>
        <motion.div className='home__left'
        initial={{ x: '-100vw'}}
        animate={{ x: 0 }}
        transition={{delay : 0.2, duration : 1}}
        >
            <div className='wrapper'>
            <span>
                Hi, I am Amritendu
            </span>
            <span>
                I am a
            </span>
            <Typewriter
                options={{
                    strings: ['Student', 'Web Developer', 'Blockchain Enthusiast'],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000,

                }}
                />
            </div>
            
            <div className='elements'>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
                <button className='button' type='button'>
                    Contact Me 
                </button>
                </Link>

                <div className='media'>
                    <a href="https://github.com/ItzAmrit2002" target="_blank"><img src={github2} className='media__images' alt='github'/></a>
                    <a href="https://www.linkedin.com/in/amritendu-mohan-roy-4520181b6/" target="_blank"><img src={linkedin2} className='media__images2' alt='linkedin'/></a>
                    <Link
                        to='#'
                        onClick={(e) => {
                            window.location.href = "mailto:amritgg2002@gmail.com";
                            e.preventDefault();
                        }}
                    >
                        <img src={gmail2} className='media__images' alt='gmail'/>
                    </Link>
                    

                </div>
            </div>
            
            
        </motion.div>
        <motion.div className='home__right'
        initial={{ x: '100vw'}}
        animate={{ x: 0 }}
        transition={{delay : 0.2, duration : 1}}
        >
            <Lottie options={defaultOptions} height={width} width={width} />
        </motion.div>
    </div>
  )
}

export default Home