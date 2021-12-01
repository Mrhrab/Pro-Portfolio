import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const MacbookCart = () => {
    return (
        <div>
            <Header></Header>
            <div>
            <CardGroup className="mb-3">
                <Card style={{ width: '18rem' }}>
                    
                 <Card.Img variant="top" src="https://i.ibb.co/4tY7vW5/Screenshot-2021-11-30-155913.png" />

               

                <Card.Body>
                    <Card.Title>Macbook Cart</Card.Title>
                    <Card.Text>
                     <h6>Technologies:</h6>
                    Created with plain HTML, CSS,Javascript, Weather-api. <br /><br />

                   <h6></h6>
                    <h6>Technologies:</h6>
                    Created with plain html,css,js. <br/>
                    <h6> Website Features:</h6>
                    *User could order macbook depending on their preferences <br/>
                    *Get additional specs by choosing through button click  <br/>
                    *Products can be choosed with basic features or additional features <br/> <br/>
                     <span><small> <a href="https://keen-wright-de3600.netlify.app/" alt="">Live Link</a> </small></span>
                    <br />
                    <span><small> <a href="https://keen-wright-de3600.netlify.app/" alt="">Github-Repository</a> </small></span>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default MacbookCart;