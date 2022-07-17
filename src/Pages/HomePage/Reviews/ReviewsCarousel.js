import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ReviewsCarousel = () => {
    return (
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div class='item'>
                <h4>1</h4>
            </div>
            
        </OwlCarousel>
    );
};

export default ReviewsCarousel;