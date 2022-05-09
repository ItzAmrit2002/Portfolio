import React from 'react'
import './Footer.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="Footer">
        <footer className='footer__container'>
          <p>
            {/*To go to the licence*/}
            <a href="https://guides.lib.umich.edu/creativecommons/licenses#:~:text=Attribution%2DNonCommercial%2DNoDerivs%3A%20CC,way%20or%20use%20them%20commercially.">© Copyright 2022</a>
            {/*For the Bullet*/}
          </p>
          <p>&nbsp;•&nbsp;</p>
          <p>All Rights Reserved</p>
          <p>&nbsp;•&nbsp;</p>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><p>Home</p></Link>
          
          {/*Does Nothing*/}
          <p>&nbsp;•&nbsp;</p>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><p>Contact</p></Link>
          {/*For the Bullet*/}
          <p>&nbsp;•&nbsp;</p>
          {/*Does nothing*/}
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}><p>About</p></Link>          <p />
        </footer>
        <p className='developer'>Developed and Designed By Amritendu</p>
      </div>
  )
}

export default Footer