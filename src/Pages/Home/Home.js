import React from 'react';
import Dog from './Dog/Dog';
import HomeServices from './HomeServices/HomeServices';
import ImageSection from './ImageSection/ImageSection';
import TopBanner from './TopBanner/TopBanner';
import 'react-toastify/dist/ReactToastify.css';
import useSetTitle from '../../hooks/useSetTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    useSetTitle('Home')
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