import React from 'react';
import Footer from '../Footer/Footer';
import './Aboutme.css'
import Header from '../Header/Header';
import Skills from './Skills';

const AboutMe = () => {
   
    return (
        <div>
            <Header></Header>
        <div>
           <div  className="profile-container ">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
             I'M <span className="highlighted-text ">Mehrab Hossain</span>
            </span>
            
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
             
            </span>
            <span className="profile-role-tagline">
             It has been long time since i <br/> 
             am practising projects with react. <br/>
              js,plain js, css,  html and many <br/>
               more.My goal is to learn more <br/>
               and never  stop learning because <br/>
                i love developing websites. My <br/>
                 mission was to become a cyber <br/>
                 security expert but i thought  web <br/>
                 developing will help me know about <br/>
                 website  security more but i fell in <br/>
                 love with web development  and want <br/>
                 work as a web full Stack developer.
            </span>
          </div>

          
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      
    </div>
                     
       </div>
        <Skills/>

       <Footer></Footer>
        </div>
    );
};

export default AboutMe;