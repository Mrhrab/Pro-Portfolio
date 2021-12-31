import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

import Profile from './Profile';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Profile></Profile>
            <Projects></Projects>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;