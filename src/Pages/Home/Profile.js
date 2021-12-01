import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
    return (
       <div>
           <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mehrab</span>
            </span>
            
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev💻",
                    1000,
                    "Full stack Developer😎",
                    1000,
                    "Mern stack Dev📱",
                    1000,
                    "Mongodb Database🔴",
                    1000,
                    "React js🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn btn-warning rounded-pill hire-btn"
           
            >
                <Link  to="/contactMe" className="header-text">Contact Me</Link>
             </button>
            <a href="MehrabResume.pdf" download="MehrabResume.pdf">
              <button className="btn btn-danger rounded-pill resume-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      
    </div>
                     
       </div>
    );
};

export default Profile;