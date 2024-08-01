import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'; ////////////////////// وبعدها هي
import './Hero.css'
import MyPhoto from "../../Assests/myphoto.jpg"
const Hero = () => {
  return (
    <div id='home' className='Hero'>
    <img src={MyPhoto} alt='Photo' className="img-circle"/>
    <h1><span>I’m Souheal Mheash </span>, Frontend developer based in Syria.</h1>
    <p>I am a Frontend developer from Damascus, With 3 Years of experiance in multiple companies.</p>
     <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Connect With me</AnchorLink></div>
        <div className='hero-resume'><a href='/Souheal-Mheash-CV.pdf' download='Souheal-Mheash-Resume.pdf'>
            My Resume
          </a></div>
     </div>   
    </div>
  )
}

export default Hero