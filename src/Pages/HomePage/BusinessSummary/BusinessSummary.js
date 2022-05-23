import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faScrewdriverWrench, faComment, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <>
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than 10 Years We Provide Service <br className="md:block hidden" />
                    in Real State Industry
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map" className="w-full xl:h-full h-96 object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile" className="sm:hidden -mt-10 block w-full h-96 object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 ">
                        <p className="text-3xl font-semibold text-gray-800">200+
                            <FontAwesomeIcon icon={faUsers} className='w-8 pl-2' />
                        </p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Served Customers</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">120M+
                            <FontAwesomeIcon icon={faArrowTrendUp} className='w-8 pl-2' />
                        </p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Annual revenue</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">33K+
                            <FontAwesomeIcon icon={faComment} className='w-8 pl-2' />
                        </p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Reviews</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 xl:ml-96 top-0 xl:mr-56 mt-4">
                        <p className="text-3xl font-semibold text-gray-800">50+
                            <FontAwesomeIcon icon={faScrewdriverWrench} className='w-7 pl-2' />
                        </p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Tools</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;