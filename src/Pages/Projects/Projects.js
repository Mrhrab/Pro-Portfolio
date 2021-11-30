import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container className="my-5">
            <h1 className="text-secondary">Some of my projects:</h1>
            <br />
            <br />
            <br />

            <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/27X15ZP/Screenshot-2021-11-30-155545.png" />
                <Card.Body>
                <Card.Title>Bi-Bike</Card.Title>
                <br />
                <Card.Title> 
                    <span><small> <a href="https://bike-gallery-client.web.app/" alt="">Live Link</a> </small></span>
                    <br />
                    <span><small> <a href="https://github.com/Mrhrab/Bi-Bike-Server-Side-Code" alt="">Github-client-code</a> </small></span>
                    <br />
                    <span><small> <a href="https://github.com/Mrhrab/Bi-Bike-Server-Side-Code" alt="">Github-server-code</a> </small></span>
                
                 </Card.Title>
                <Card.Text>
                    <h6>Technologies:</h6> Html, Css, Bootstrap, React Library, Mongodb, Github, React-Router, Firebase, Express.

                   <h6> Website Features:</h6>
                    * Secured by JWT token and a fully functional  full-stack web-app
                    *Users can order products,leave reviews, manage all of his/her orders after login/signIn with gmail and password.
                    * New products can be added through the admin portal to the explore tab.

                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/P1RzqRn/Screenshot-2021-11-30-153955.png" />
                <Card.Body>
                <Card.Title>Weather app</Card.Title>
                <br />
                <Card.Title> 
                     <a href="https://suspicious-benz-7864e1.netlify.app/" alt=""><small>Live Link</small></a> 
                      <br />
                    <span><small> <a href="https://github.com/Mrhrab/temperature-hot-solution-main" alt="">Github-Repository</a> </small></span>
                    
                
                
                 </Card.Title>
                <Card.Text>
                   <h6>Technologies:</h6>
                    Created with plain HTML, CSS,Javascript, Weather-api.
                    <h6> Website Features:</h6>
                    *User can get knowledge about current  weather condition just inserting their location
                    *All shown results are  accurate  
                    *Weather condition will also shown through cloud/sun  and temperature

                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/4tY7vW5/Screenshot-2021-11-30-155913.png" />
                <Card.Body>
                <Card.Title>Macbook-Cart</Card.Title>
                <br />
                <Card.Title> <span><small> <a href="https://keen-wright-de3600.netlify.app/" alt="">Live Link</a> </small></span>
                 <br />
                    <span><small> <a href="https://keen-wright-de3600.netlify.app/" alt="">Github-Repository</a> </small></span>
                    
                 </Card.Title>
                <Card.Text>
                    <h6>Technologies:</h6>
                    Created with plain html,css,js
                    <h6> Website Features:</h6>
                    *User could order macbook depending on their preferences
                    *Get additional specs by choosing through button click 
                    *Products can be choosed with basic features or additional features

                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </Container>
    );
};

export default Projects;