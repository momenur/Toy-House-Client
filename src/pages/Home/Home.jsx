import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Gallery from './Gallery/Gallery';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Link } from 'react-router-dom';

const Home = () => {

    const [allToy, setAllToy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])

    const bikes = allToy.filter(toy => toy.category === 'bike')
    const cars = allToy.filter(toy => toy.category === 'car')
    const jeeps = allToy.filter(toy => toy.category === 'jeep')
    console.log(cars);


    return (
        <div className='bg-neutral text-neutral-content'>
            <Banner></Banner>
            <Gallery></Gallery>

            {/*  tabs */}

            <h1></h1>
            <h1 className='pt-20 mb-24 text-5xl font-semibold text-center'><span className='border-b'>Shop By Category</span></h1>

            <Tabs>
                <TabList>

                    <div className='flex justify-around'>
                        <Tab>Bike</Tab>
                        <Tab>Car</Tab>
                        <Tab>Jeep</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='grid-cols-3 gap-4 pb-12 mt-12 md:grid ms-4'>
                        {
                            bikes.map(bike => <div >
                                <div className="shadow-xl card card-compact w-96 bg-neutral-600 text-neutral-content">
                                    <figure><img className='w-[350px] rounded-lg mt-4 h-[250px]' src={bike.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{bike.toyName}</h2>
                                        <p>Price: ${bike.price}</p>
                                        <p>Rating: {bike.rating}</p>
                                        <div className="justify-end card-actions">
                                            <Link to={`/allToy/${bike._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid-cols-3 gap-4 pb-12 mt-12 md:grid ms-4'>
                        {
                            cars.map(bike => <div >
                                <div className="shadow-xl card card-compact w-96 bg-neutral-600 text-neutral-content">
                                    <figure><img className='w-[350px] rounded-lg mt-4 h-[250px]' src={bike.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{bike.toyName}</h2>
                                        <p>Price: ${bike.price}</p>
                                        <p>Rating: {bike.rating}</p>
                                        <div className="justify-end card-actions">
                                            <Link to={`/allToy/${bike._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid-cols-3 gap-4 pb-12 mt-12 md:grid ms-4'>
                        {
                            jeeps.map(bike => <div >
                                <div className="shadow-xl card card-compact w-96 bg-neutral-600 text-neutral-content">
                                    <figure><img className='w-[350px] rounded-lg mt-4 h-[250px]' src={bike.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{bike.toyName}</h2>
                                        <p>Price: ${bike.price}</p>
                                        <p>Rating: {bike.rating}</p>
                                        <div className="justify-end card-actions">
                                            <Link to={`/allToy/${bike._id}`}><button className="btn btn-primary">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Home;