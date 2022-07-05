import './About.css';
import pexels from "./pexels.jpg"
const About = () =>{
    return (
        <div className="a">
         <div className='a-left'>
           <div className='a-left-wrapper'>
           <img src={pexels} alt="Mera_Image" className='a-img'></img>
           </div>
         </div>
         <div className='a-right'>
             <div className='a-right-wrapper'>
                 <div className='a-me'><h1>About Me</h1></div>
                 <div className='a-me-first'>
                <h2>Pursuing BTech(IT) 3rd Year || Full Stack Developer || DSA Enthusiast || Love To Code</h2>
                 </div>
                 <div className='a-me-second'> 
                 <h4>I am pursuing B.Tech in Information
Technology from USICT, having
good knowledge of C,C++ and DSA.I
am passionate individual with great
communication skills. Actively
looking for relevent internship
opportunities.My skillset include C
C++,
DSA,
HTML,
CSS,
Bootstrap,
JavaScript,
NodeJS,
EJS,
MongoDB,
React</h4>
                 </div>
             </div>
         </div>

        </div>
    );
}
export default About;