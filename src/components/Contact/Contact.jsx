import {useRef, useState} from "react";
import "./Contact.css";
import Call from "./iconsAndImages/Call.png";
import Email from "./iconsAndImages/Email.png";
import LeetCode from "./iconsAndImages/LeetCode.png";
import gfg from "./iconsAndImages/gfg.jfif";
import github from "./iconsAndImages/github.png";
import LinkedIn from "./iconsAndImages/LinkedIn.png";
import emailjs from '@emailjs/browser';

function Contact() {
    const [done,setDone] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        emailjs.sendForm('service_8kfgxe9', 'template_767ldx7', formRef.current, 'exqRRA-WhBiSRWb5h')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return ( 
        <div className="c">
        <div className="c-background"></div>
        <div className="c-wrapper">
        <div className="c-left">
            <div className="c-left-wrapper">
                <h1 className="c-left-title">Get in Touch</h1>
                <div className="social-wrapper">
                <div className="phone social-gen">
                <img src={Call} alt="Call" className="icons" />
                <h3> 8882445627</h3>
                </div>
                <div className="email social-gen">
                <img src={Email} alt="Call" className="icons" />
                <h3>gaurav.tiwari3001@gmail.com</h3>
                </div>
                <div className="linkedIn social-gen">
                <img src={LinkedIn} alt="Call" className="icons" />
                <h3><a href="https://www.linkedin.com/in/gaurav-kumar-tiwari-b254431a9/" target="_blank" rel="noreferrer noopener">LinkedIn</a></h3>
                </div>
                <div className="linkedIn social-gen">
                <img src={gfg} alt="Call" className="icons" />
                <h3><a href="https://auth.geeksforgeeks.org/user/gauravtiwari3001/practice/" target="_blank" rel="noreferrer noopener">GFG</a></h3>
                </div>
                <div className="Github social-gen">
                <img src={github} alt="Call" className="icons" />
                <h3>GitHub</h3>
                </div>
                <div className="LeetCode social-gen">
                <img src={LeetCode} alt="Call" className="icons" />
                <h3><a href="https://leetcode.com/Gaurav_kt/" target="_blank" rel="noreferrer noopener">LeetCode</a></h3>
                </div>
                </div>
            </div>
        </div>
        <div className="c-right">
            <div className="c-right-wrapper">
            <div className="c-right-desc">
                <h1 className="desc-p">Have any feedback? Want to work with me ?</h1>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Email" name="from_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <textarea name="message" placeholder="message"></textarea>
                <button>Submit</button>
                {done && <p>Thanks a lot</p>}
            </form>
            </div>
        </div>
        </div>
        </div>
     );
}

export default Contact;