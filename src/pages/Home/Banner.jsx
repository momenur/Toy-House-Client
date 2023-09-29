import React from 'react';
import './Banner.css'
import doctorLeft from '../../assets/images/b-l.jpg'
import doctorMidle from '../../assets/images/b-m.jpg'
import doctorRight from '../../assets/images/b-r.jpg'
const Banner = () => {
    return (
        <div className="mx-auto backgroundImage">
            <div className='md:flex items-center justify-center w-full md:h-[700px]'>
                <div className='flex items-center justify-center gap-8 px-10'>
                    <div className='w-1/2 py-10 text-gray-200 md:py-0' data-aos="fade-right">
                        <h1 className='mb-6 font-bold text-7xl'>Baby Toy's</h1>
                        <h3 className='mb-4 text-3xl font-semibold text-rose-500'>Your Best baby toy here</h3>
                        <p className='text-lg leading-snug line-clamp-3 line text-rose-100'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button className='px-4 py-2 mt-6 text-xl font-medium text-white rounded-md bg-rose-400'>All Service</button>
                    </div>
                    <div className='hidden lg:block w-[550px] h-auto mb-28' data-aos="fade-left">
                        <div className='relative w-full'>
                            <img className='w-[250px] h-[280px] border-rose-400 border-4' src={doctorLeft} alt="" />
                            <img className='w-[250px] h-[280px] absolute top-1/2 left-1/4 border-rose-400 border-4' src={doctorMidle} alt="" />
                            <img className='w-[250px] h-[280px] absolute right-0 top-0 border-rose-400 border-4' src={doctorRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;