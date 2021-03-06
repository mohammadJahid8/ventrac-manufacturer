import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Explore from "../Explore/Explore";
import Reviews from "../Reviews/Reviews";
import ReviewsCarousel from "../Reviews/ReviewsCarousel";

import SpecialService from "../SpecialService/SpecialService";
import Subscribe from "../Subscribe/Subscribe";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Explore />
      <Tools />
      <BusinessSummary />
      <Reviews />
      {/* <ReviewsCarousel /> */}
      <SpecialService />
      <Subscribe />
    </div>
  );
};

export default Home;
