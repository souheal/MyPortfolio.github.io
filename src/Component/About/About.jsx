import React from 'react'
import './About.css'
import MyPhoto from "../../Assests/myphoto.jpg"
import MyPhoto2 from "../../Assests/theme_pattern.svg"

const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
        <h1>About me</h1>
        <img src={MyPhoto2} alt='Photo' />
    </div>
    <div className='about-sections'>
        <div className='about-left'>
            <img src={MyPhoto} alt='Photo'/>
        </div>
        <div className='about-right'>
        <div className='about-para'>
            <p> I am an expeinced FrontEnd Developer with over decade a professional expertise in the field </p>
            <p> I am an expeinced FrontEnd Developer with over decade a professional expertise in the field </p>
        </div>
        <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS </p> <hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>React Js</p> <hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>Python</p> <hr style={{width:"50%"}}/></div>
        </div>
        </div>
    </div>
    <div className='about-achivments'>
     <div className='about-achivment'>
        <h1>10+</h1>
        <p>Years of Experince</p>
      </div>
      <hr/>
      <div className='about-achivment'>
        <h1>90+</h1>
        <p>Project Completed</p>
      </div>
      <hr/>
      <div className='about-achivment'>
        <h1>15+</h1>
        <p>Happy Client</p>
      </div>
     </div>
    </div>
  )
}

export default About