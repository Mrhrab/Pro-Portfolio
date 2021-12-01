import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg mt-5">
            <h3 className="text-design portfolio-name">Mehrab's Portfolio</h3>
            <h6 className="text-design fst-italic">©All Rights Reserved</h6>
            
            <h6 className="text-design ">dev.mehrab1@gmail.com</h6>
            <p className="text-design">Via Clitumno, 23, Milano MI, Italy</p>
             <div className="social-profiles">
                     <div>
                         <a href="https://www.linkedin.com/in/mehrab-hossain-037170185/">
                        <img className="linked-in-img" src="https://i.ibb.co/bzmn2nF/linked-in.png" alt=""></img>
                    </a>
                    <a href="https://github.com/Mrhrab">
                        <img className="github-img" src="https://i.ibb.co/XVRJ4gK/Git-Hub-Logo-White.png" alt=""></img>
                    </a>

                     </div>
                     </div>
        </div>
    );
};

export default Footer;