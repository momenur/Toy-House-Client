import React from 'react';
import Title from '../../../components/Title/Title';

const Gallery = () => {
    return (
        <div>
            <Title title='TOY GALLERY'/>
            <div className='py-12'>
                <div className='grid-cols-3 gap-6 md:grid ms-4'>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://f.ptcdn.info/803/036/000/nwv3692b80i5ZjyuTfI-o.jpg" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Jeep Car!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.freepik.com/free-photo/red-vintage-motorcycle_74190-3481.jpg?t=st=1695881272~exp=1695881872~hmac=d236d810e813b3659b5da88c11e8dc663489017277e4a55ba910a6b316a76a4f" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Fire Car!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.fruugo.com/product/9/87/187977879_max.jpg" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Police Jeep!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?t=st=1695956671~exp=1695957271~hmac=1e18e81dc93bc97b50a07e192344cc3aa789ff4324e7397e9c3633072295b381" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">By Cycle!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.freepik.com/free-vector/red-sports-car-black-background-vector_53876-67367.jpg?t=st=1695956671~exp=1695957271~hmac=02e0018dd51902cac8661de6697df856d3bafe618b587d823b93ce05754e9cff" alt="Shoes" /></figure>
                        <h2 className="py-2 text-2xl text-center">Three Wheel Bike!</h2>
                    </div>
                    <div className="shadow-xl shadow-rose-400 w-[380px]  rounded-sm bg-rose-500 text-neutral-content mb-8 border-rose-500 border-2">
                        <figure><img className='w-[380px] h-[220px] rounded-sm' src="https://img.freepik.com/free-vector/vintage-red-car_1053-312.jpg?t=st=1695956671~exp=1695957271~hmac=08cc7ccfcee362126e58e6f8c79991cb7a66f312f83da8df750763ef91f990c7" alt="Shoes" /></figure>
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