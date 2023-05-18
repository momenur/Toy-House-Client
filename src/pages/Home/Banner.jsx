import React from 'react';
import slider1 from '../../assets/sliderImg/1.jpg'
import slider2 from '../../assets/sliderImg/2.jpg'
import slider3 from '../../assets/sliderImg/3.jpg'
import slider4 from '../../assets/sliderImg/4.jpg'
import slider5 from '../../assets/sliderImg/5.jpg'
import slider6 from '../../assets/sliderImg/6.jpg'

const Banner = () => {
    return (
        <div className="w-full carousel">
            <div id="slide1" className="relative w-full carousel-item ">
                <img src={slider3} className="w-full h-[400px] bg-gradient-to-r from-indigo-500" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <h1 className='absolute text-5xl font-bold text-neutral-content bottom-24'>Tract Toy <br /> <span className='text-xl'>Made in Chaina</span></h1>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img src={slider4} className="w-full h-[400px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <h1 className='absolute text-5xl font-bold text-neutral-content bottom-24'>Tata Tract Toy <br /> <span className='text-xl'>Made in Japan</span></h1>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full carousel-item">
                <img src={slider1} className="w-full h-[400px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <h1 className='absolute text-5xl font-bold text-neutral-content bottom-24'>Sport Car Toy <br /> <span className='text-xl'>Made in Chaina</span></h1>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="relative w-full carousel-item">
                <img src={slider2} className="w-full h-[400px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <h1 className='absolute text-5xl font-bold text-neutral-content bottom-24'>Supper Tract Toy <br /> <span className='text-xl'>Made in Bangladesh</span></h1>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;