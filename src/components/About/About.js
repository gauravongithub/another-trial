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
                <h2>This is my website. This is just some random text to fill
                up the space.</h2>
                 </div>
                 <div className='a-me-second'> 
                 <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem ea eligendi consectetur error quae voluptate asperiores impedit harum, iure pariatur quia quis quisquam reprehenderit magni expedita, cupiditate ullam voluptatem. </h4>
                 </div>
             </div>
         </div>

        </div>
    );
}
export default About;