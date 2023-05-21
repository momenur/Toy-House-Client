import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData()
    console.log(toy);
    return (
        <div className='pt-12 bg-neutral'>
            <div className='md:ms-24'>
                <img className='mb-8 rounded-lg w-[350px] h-[300] ' src={toy.photo} alt="" />
            </div>
            <div className='pb-12 text-neutral-content md:ms-24'>
                <p className='text-2xl font-semibold'>Toy Name: {toy.toyName}</p>
                <p>Seller Name: {toy.sellerName}</p>
                <p>Seller Email: {toy.sellerEmail}</p>
                <p>Price: {toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <p>Available Quantity: {toy.quantity}</p>
                <p>Toy Details: {toy.detail}</p>
                
            </div>
        </div>
    );
};

export default Details;