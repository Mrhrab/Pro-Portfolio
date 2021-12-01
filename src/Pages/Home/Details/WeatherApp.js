import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const WeatherApp = () => {
    return (
       <div>
            <Header></Header>
            <div>
            <CardGroup className="mb-3">
                <Card style={{ width: '18rem' }}>


                <Card.Img variant="top" src="https://i.ibb.co/P1RzqRn/Screenshot-2021-11-30-153955.png" />

               

                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                     <h6>Technologies:</h6>
                    Created with plain HTML, CSS,Javascript, Weather-api. <br /><br />

                   <h6> Website Features:</h6>
                    *User can get knowledge about current  weather condition just inserting their location. <br />
                    *All shown results are  accurate. <br /> 
                    *Weather condition will also shown through cloud/sun  and temperature. <br /><br />
                     <a href="https://suspicious-benz-7864e1.netlify.app/" alt=""><small>Live Link</small></a> 
                      <br />
                    <span><small> <a href="https://github.com/Mrhrab/temperature-hot-solution-main" alt="">Github-Repository</a> </small></span>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default WeatherApp;