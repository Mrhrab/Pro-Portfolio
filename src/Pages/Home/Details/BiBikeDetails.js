import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Carousel, Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const BiBikeDetails = () => {
    return (
        <div>
            <Header></Header>
            <div>
            <CardGroup className="mb-3">
                <Card style={{ width: '18rem' }}>

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/27X15ZP/Screenshot-2021-11-30-155545.png"
                        alt="First slide"
                        />
                        <Carousel.Caption className="text-warning fw-bold">
                        <h3>Homepage With Carousol</h3>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4W0Dtmz/Screenshot-2021-12-01-152909.png"
                        alt="First slide"
                        />
                        <Carousel.Caption className="text-warning fw-bold">
                        <h3>Secured Admin Portal</h3>
                        <p>Only an admin can make an user admin. </p>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JtwX6Sn/Screenshot-2021-12-01-151335.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption className="text-warning fw-bold">
                        <h3>Explore Tab</h3>
                        <p>This tab contains all the products</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/VQp5pXs/Screenshot-2021-12-01-151446.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption  className="text-warning fw-bold">
                        <h3>Register Page</h3>
                        <p>Here user can register using gmail and pasword</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7K3GJQH/Screenshot-2021-11-30-153955.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption  className="text-warning fw-bold">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    </Carousel>

                <Card.Body>
                    <Card.Title>Bi Bikes</Card.Title>
                    <Card.Text>
                         This is one of my best website where user can login using email and firebase to buy products.
                          <h6> Website Features:</h6>
                          **Admin portal is secured by Jwt Token .Only an admin can make an user admin. <br />
                            * Secured by JWT token and a fully functional  full-stack web-app <br />
                            *Users can order products,leave reviews, manage all of his/her orders after login/signIn with gmail and password. <br />
                            * New products can be added through the admin portal to the explore tab.
                            *From Dashboard admin can manage everything . <br />
                            * User can leave a reviews at the bottom of the homepage. <br />
                            * Responsive for mobile , desktop and tablets.
                    
                         <br />
                        <span><small> <a href="https://bike-gallery-client.web.app/" alt="">Live Link</a> </small></span>
                    <br />
                    <span><small> <a href="https://github.com/Mrhrab/Bi-Bike-Server-Side-Code" alt="">Github-client-code</a> </small></span>
                    <br />
                    <span><small> <a href="https://github.com/Mrhrab/Bi-Bike-Server-Side-Code" alt="">Github-server-code</a> </small></span>
                     
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default BiBikeDetails;