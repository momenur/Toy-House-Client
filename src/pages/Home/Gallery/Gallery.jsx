import React from 'react';
import Title from '../../../components/Title/Title';

const Gallery = () => {
    return (
        <div>
            <Title title='TOY GALLERY'/>
            <div className='py-12'>
                <div className='grid-cols-3 gap-6 md:grid ms-4'>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Lj-zdl3KqRG-tu7aq39KThM88WEQZT3eIA&usqp=CAU" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Jeep Car!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjT8Jed_jg4ggMIbBB1gw0_JFZwtlFMMB0w&usqp=CAU" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Fire Car!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://i.ytimg.com/vi/8a9jzpbFp-o/maxresdefault.jpg" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Police Jeep!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.fruugo.com/product/9/87/187977879_max.jpg" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">By Cycle!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrq2F7rSxUBgWR58HhphKNV-cAZniZOdHQww&usqp=CAU" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Three Wheel Bike!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://staranddaisy.in/wp-content/uploads/2023/03/lfc_j21m_p_grey_1.jpg" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Big Wheel Jeep!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://cdn.shopify.com/s/files/1/0561/9535/0689/products/90313RED2021_7262a841-61c6-4c48-9b84-52a2e8830fe5_large.jpg?v=1665025526" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Police Bike!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IW8xTlQJ7t4gN55Ex9PDlv2Y8X25b3bqgg&usqp=CAU" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Train Toy!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMTb2sraWp8pIu8TaqIqXRRVBYAQqXaSKkA&usqp=CAU" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Yellow Train!</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;