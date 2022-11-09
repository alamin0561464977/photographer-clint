import React from 'react';
import Dog from './Dog/Dog';
import HomeServices from './HomeServices/HomeServices';
import ImageSection from './ImageSection/ImageSection';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <HomeServices></HomeServices>
            <Dog></Dog>
            <ImageSection></ImageSection>
        </div>
    );
};

export default Home;