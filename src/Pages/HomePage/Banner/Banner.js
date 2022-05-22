import React from 'react';
import banner3 from '../../../images/banner/banner-3.png';
import banner4 from '../../../images/banner/banner-4.png';
import banner5 from '../../../images/banner/banner-5.png';



const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner5})` }}>
            <div className="hero-overlay bg-opacity-20" />
            <div className="hero-content text-center text-slate-200">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;