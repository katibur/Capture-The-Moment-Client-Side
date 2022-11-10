import React from 'react';
import './BannerCarousel.css';

const BannerCarousel = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (


        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='corousalImage mx-auto'>
                <img src={image} alt="" className="w-full h-100 rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-40 top-1/2">
                <h1 className='text-white font-bold text-5xl'>
                    Capture <br />
                    The Best Moments<br />
                    Of Your Life
                </h1>
            </div>

            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerCarousel;