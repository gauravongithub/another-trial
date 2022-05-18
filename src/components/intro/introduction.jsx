import React from 'react'
import Me from "../../Img/Mera.jpeg"
import "./intro.css"
function introduction() {
  return (
    <div className='i'>
    <div className='i-left'>
      <div className='i-left-wrapper'>
      <h2 className='i-intro'>Hi there, I am 😎</h2>
        <h1 className='i-name'>Gaurav Kumar Tiwari</h1>
        <div className='i-title'>
          <div className='i-title-wrapper'>
            <div className='i-title-item'>Web Developer</div>
            <div className='i-title-item'>DSA Enthusiast</div>
            <div className='i-title-item'>Pursuing B.Tech</div>
            <div className='i-title-item'>Love to Code</div>
            <div className='i-title-item'>Optimistic Person!</div>
            
          </div>
        </div>
        <div className='i-desc'>
       Welcome to my portfolio Website!
        </div>
      </div>
      {/* <svg className='' xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>  */}
    </div>
    <div className='i-right'>
    <div className='i-bg'></div>
      <img src={Me} alt="Mera_Image" className='i-img'></img>
    </div>
    </div>
  )
}
export default introduction;