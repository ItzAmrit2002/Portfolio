import React, { useEffect, useState } from 'react'
import './Skill.css'
import Lottie from "react-lottie";
// import react from '../assets/react.json'
// import node from '../assets/node.json'
// import web3 from '../assets/web3.json'

const Skill = ({slno, logo, title, details}) => {
    const [width, setWidth] = useState(75)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        animationData: logo,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

    //  useEffect(() => {
    //     if(window.innerWidth > 1400)
    //     {
    //         setWidth(100)
    //     }

    //     window.addEventListener("resize", () => {
    //     if(window.innerWidth < 1400)
    //     {
    //         setWidth(75)
    //     }
    //     if(window.innerWidth > 1400)
    //     {
    //         setWidth(100)
    //     }
    //       });
    //   }, []);
    useEffect(() => {
        const handleResize = () => {
                
                if(window.innerWidth > 1400)
                {
                    setWidth(100)
                }
                else if(window.innerWidth < 1400 && window.innerWidth > 992)
                {
                    setWidth(75)
                }
                else if(window.innerWidth < 993)
                {
                    setWidth(100)
                }

        };
      
        window.addEventListener('resize', handleResize);
      
        // Cleanup event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [window.innerWidth]);

  return (
    <div className='skill'>
        <div className="animation">
            <Lottie options = {defaultOptions} height={width} width = {width}/>
        </div>
        <div className="skill__container">
            <h2>
                {title}
            </h2>
            <p>
                {details}
            </p>
        </div>
    </div>
  )
}

export default Skill