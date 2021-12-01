import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Typical from 'react-typical';
import Footer from '../Footer/Footer';

const ContactMe = () => {
    return (
        <div>

            <Header/>
        <Container>
            <h1>
                <Typical
                className="mt-5"
                  loop={Infinity}
                  steps={[
                    "Thanks for visiting my website",
                    1000,
                    "If i have to learn anything more for the job please suggest me",
                    2000,
                    "I will reply as soon as possible.",
                    1000
                    
                  ]}
                />
              </h1>
           

            <form className="mt-5" action="https://formsubmit.co/dev.mehrab1@gmail.com" method="POST">
            <input className="w-25" placeholder="Your Full Name" type="text" name="text" required />
            <br />
            <br />
            <input className="w-50" placeholder="Your Email" type="email" name="email" required />
            <br />
            <br />
            <textarea className="w-75" placeholder="Write description" type="text" name="description" required />
            <br />
            <br />
            <button className="btn btn-warning" type="submit">Send</button>

             </form>
             <br />
             <br />
             <p className="text-success">Or Call Me: +39 3512295629</p>

        </Container>
        <Footer></Footer>
        </div>
    );
};

export default ContactMe;