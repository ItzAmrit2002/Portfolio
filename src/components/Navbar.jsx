import React from 'react'
import './Navbar.css'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


const Navbar = () => {
  return (
      <nav>
    <div className='navbar'>
        <span className='navbar__resume'>
            <h4 className='portfolio'>Portfolio</h4>
        </span>

        <div className='navbar__container'>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                    <div className='bar'></div>
                </li>
                <li>
                <a href='#about'>About</a>
                    <div className='bar'></div>
                </li>
                <li>
                        <a href="#projects">Projects</a>
                    <div className='bar'></div>
                </li>
                
            </ul>
        </div>

        <span>
            <h4 className='c_button'>Contact</h4>
        </span>
    </div>
    </nav>
  )
}

export default Navbar