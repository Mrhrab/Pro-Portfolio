import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className=" bg-light">

        <Container >
            <h1 className="text-warning fw-bold fst-italic pt-5">Some of my projects:</h1>
            <br />
            <br />
            <br />

            <CardGroup className="mb-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/27X15ZP/Screenshot-2021-11-30-155545.png" />
                <Card.Body>
                    <Card.Title>Bi Bikes</Card.Title>
                    <Card.Text>
                     This is one of my best website where user can login using email and firebase to buy products.
                    </Card.Text>
                    <Button class="btn btn-warning"variant="primary">
                        <Link  to="/biBikeDetails" className="header-text">Details</Link>
                        </Button>
                </Card.Body>
            </Card>

            </CardGroup>
            <CardGroup className="my-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/4tY7vW5/Screenshot-2021-11-30-155913.png" />
                <Card.Body>
                    <Card.Title>Macbook Cart</Card.Title>
                    <Card.Text>
                     This is one of my best website where user can login using email and firebase to buy products.
                    </Card.Text>
                    <Button class="btn btn-secondary"variant="primary"><Link  to="/macbookCart" className="header-text">Details</Link></Button>
                </Card.Body>

            </Card>
                </CardGroup >
                <CardGroup  className="my-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/P1RzqRn/Screenshot-2021-11-30-153955.png" />
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                     Always correct weather and Responsive design slick design . Weather condition with image.
                    </Card.Text>
                    <Button class="btn btn-danger"variant="primary"> <Link  to="/weatherApp" className="header-text">Details</Link> </Button>
                </Card.Body>
            </Card>

            </CardGroup>

            {/* <CardGroup>
            <Card className="m-2">
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
            </CardGroup> */}
        </Container>
        </div>
    );
};

export default Projects;