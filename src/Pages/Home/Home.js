import React from 'react';
import Dog from './Dog/Dog';
import HomeServices from './HomeServices/HomeServices';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <HomeServices></HomeServices>
            <Dog></Dog>
        </div>
    );
};

export default Home;