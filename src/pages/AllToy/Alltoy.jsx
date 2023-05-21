import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const Alltoy = () => {
    const [allToy, setAllToy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToy')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])


    return (
        <div>
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='flex'>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToy.map(toy => <SingleToy key={toy._id} toy={toy}></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Alltoy;