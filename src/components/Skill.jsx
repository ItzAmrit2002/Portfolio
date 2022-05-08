import React from 'react'
import './Skill.css'
import Lottie from "react-lottie";
// import react from '../assets/react.json'
// import node from '../assets/node.json'
// import web3 from '../assets/web3.json'

const Skill = ({slno, logo, title, details}) => {
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

  return (
    <div className='skill'>
        <div className="animation">
            <Lottie options = {defaultOptions} height={75} width = {75}/>
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