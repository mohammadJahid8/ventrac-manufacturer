import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Explore from '../Explore/Explore';

const Home = () => {
    return (
        <div>
            <Banner />
            <Explore />
            <BusinessSummary />
        </div>
    );
};

export default Home;