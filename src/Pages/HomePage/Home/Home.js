import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Explore from '../Explore/Explore';
import SpecialService from '../SpecialService/SpecialService';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Explore />
            <BusinessSummary />
            <SpecialService />
            <Subscribe />
        </div>
    );
};

export default Home;