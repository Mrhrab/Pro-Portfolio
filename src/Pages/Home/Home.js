import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

import Profile from './Profile';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Profile></Profile>
            <Projects></Projects>
        </div>
    );
};

export default Home;